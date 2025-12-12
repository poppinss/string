/*
 * @poppinss/utils
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import string from '../index.ts'

test.group('UUID', () => {
  test('generate a uuid', ({ assert }) => {
    assert.lengthOf(string.uuid(), 36)
  })

  test('use custom implementation', ({ assert }) => {
    string.uuid.use(() => {
      return 'xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    })

    assert.equal(string.uuid(), 'xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx')

    string.uuid.restore()
    assert.notEqual(string.uuid(), 'xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx')
  })
})
