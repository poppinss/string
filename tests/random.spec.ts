/*
 * @poppinss/utils
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import string from '../index.js'

test.group('Random', () => {
  test('generate a random string of a given length', ({ assert }) => {
    assert.lengthOf(string.random(2), 2)
    assert.lengthOf(string.random(32), 32)
    assert.lengthOf(string.random(256), 256)
  })

  test('do not include URL unsafe characters', ({ assert }) => {
    const randomValue = string.random(256)
    assert.notInclude(randomValue, '+')
    assert.notInclude(randomValue, '/')
    assert.notInclude(randomValue, '=')
  })
})
