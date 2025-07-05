/*
 * @poppinss/string
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { randomUUID, type RandomUUIDOptions, type UUID } from 'node:crypto'

let uuidGenerator: typeof randomUUID = randomUUID

/**
 * Generate a UUID v4 string
 */
export function uuid(options?: RandomUUIDOptions): UUID {
  return uuidGenerator(options)
}

/**
 * Specify a custom method for generating the UUID value
 */
uuid.use = function uuidUse(generator: typeof randomUUID) {
  uuidGenerator = generator
}
uuid.restore = function uuidRestore() {
  uuidGenerator = randomUUID
}
