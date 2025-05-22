/*
 * @poppinss/string
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import bytes, { type BytesOptions } from 'bytes'
import type { PrettyBytes } from './types.js'

export default {
  /**
   * Formats bytes to a human-readable string value. When input cannot be formatted, the `null` value is returned. The accepted options are as follows.
   *
    - `decimalPlaces`: Maximum number of decimal places to include in output. `default=2`.
    - `fixedDecimals`: Whether to always display the maximum number of decimal places. `default=false`.
    - `thousandsSeparator`: Specify the separator for thousands. `default=''`.
    - `unit`: The unit in which the result will be returned. It could be `B/KB/MB/GB/TB`. The default behavior is to auto-detect based on the input.
    - `unitSeparator`: The separator between the value and the `unit`. `default=''`.
   */
  format(valueInBytes: number, options?: BytesOptions): PrettyBytes | null {
    return bytes.format(valueInBytes, options) as PrettyBytes | null
  },

  /**
   * Parse a human-readable string expression to bytes. If the unit value is a number, it will be
   * returned as it is. Otherwise, the string expression will be converted to a number representing
   * bytes.
   *
   * The `null` value is returned when the input cannot be parsed.
   *
   * Supported units and abbreviations are as follows and are case-insensitive:
      - `b` for bytes
      - `kb` for kilobytes
      - `mb` for megabytes
      - `gb` for gigabytes
      - `tb` for terabytes
      - `pb` for petabytes
   */
  parse(unit: string | number): number | null {
    if (typeof unit === 'number') {
      return unit
    }

    return bytes.parse(unit)
  },
}
