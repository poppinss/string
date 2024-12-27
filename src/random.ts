/*
 * @poppinss/string
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { randomBytes } from 'node:crypto'

/**
 * Generates a URL safe random string of a given size
 */
export function random(size: number): string {
  const bits = (size + 1) * 6
  const buffer = randomBytes(Math.ceil(bits / 8))
  return Buffer.from(buffer)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/\=/g, '')
    .slice(0, size)
}
