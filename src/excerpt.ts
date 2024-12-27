/*
 * @poppinss/utils
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

// @ts-expect-error (Package has no types)
import truncatise from 'truncatise'

/**
 * Truncate a sentence to be under the given characters limit and strip
 * out HTML tags from it.
 *
 * Optionally, you can force the truncate logic to complete words, which
 * may exceed the defined characters limit.
 */
export function excerpt(
  sentence: string,
  charactersLimit: number,
  options?: {
    completeWords?: boolean
    suffix?: string
  }
): string {
  return truncatise(sentence, {
    TruncateLength: charactersLimit,
    /**
     * Do not complete words when "completeWords" is not explicitly set
     * to true
     */
    Strict: options && options.completeWords === true ? false : true,
    StripHTML: true,
    TruncateBy: 'characters',
    Suffix: options && options.suffix,
  })
}
