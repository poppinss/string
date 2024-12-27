/*
 * @poppinss/string
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import bytes, { BytesOptions } from 'bytes'

export default {
  /**
   * Formats bytes to pretty string output
   */
  format(valueInBytes: number, options?: BytesOptions): string | null {
    return bytes.format(valueInBytes, options)
  },

  /**
   * Parse the unit expression to bytes. If the unit value is a number, then it
   * will be returned as it is. Otherwise the string expression will be
   * converted to a number representing bytes.
   */
  parse(unit: string | number): number | null {
    if (typeof unit === 'number') {
      return unit
    }

    return bytes.parse(unit)
  },
}
