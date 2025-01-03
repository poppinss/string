/*
 * @poppinss/string
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Applies padding to the left or the right of the string by repeating
 * a given char.
 *
 * The method is not same as `padLeft` or `padRight` from JavaScript STD lib,
 * since it repeats a char regardless of the max width.
 */
function applyPadding(
  value: string,
  options: { paddingLeft?: number; paddingRight?: number; paddingChar: string }
) {
  if (options.paddingLeft) {
    value = `${options.paddingChar.repeat(options.paddingLeft)}${value}`
  }

  if (options.paddingRight) {
    value = `${value}${options.paddingChar.repeat(options.paddingRight)}`
  }

  return value
}

/**
 * Justify the columns to have the same width by filling
 * the empty slots with a padding char.
 *
 * Optionally, the column can be aligned left or right.
 */
export function justify(
  columns: string[],
  options: {
    width: number
    align?: 'left' | 'right'
    indent?: string
    getLength?: (value: string) => number
  }
) {
  const normalizedOptions = {
    align: 'left' as const,
    indent: ' ',
    ...options,
  }

  return columns.map((column) => {
    const columnWidth = options.getLength?.(column) ?? column.length

    /**
     * Column is already same or greater than the width
     */
    if (columnWidth >= normalizedOptions.width) {
      return column
    }

    /**
     * Fill empty space on the right
     */
    if (normalizedOptions.align === 'left') {
      return applyPadding(column, {
        paddingChar: normalizedOptions.indent,
        paddingRight: normalizedOptions.width - columnWidth,
      })
    }

    /**
     * Fill empty space on the left
     */
    return applyPadding(column, {
      paddingChar: normalizedOptions.indent,
      paddingLeft: normalizedOptions.width - columnWidth,
    })
  })
}
