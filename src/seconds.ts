/*
 * @poppinss/string
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { parse, format } from '@lukeed/ms'

export default {
  /**
   * Formats seconds to pretty string output
   */
  format(seconds: number, long?: boolean): string {
    return format(seconds * 1000, long)
  },

  /**
   * Parse the time expression to seconds. If the unit value is a number, then
   * it will be returned as it is. Otherwise the string expression will be
   * converted to a number representing seconds.
   */
  parse(duration: string | number): number {
    if (typeof duration === 'number') {
      return duration
    }

    const milliseconds = parse(duration)
    if (milliseconds === undefined) {
      throw new Error(`Invalid duration expression "${duration}"`)
    }

    return Math.floor(milliseconds / 1000)
  },
}
