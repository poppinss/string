/*
 * @poppinss/string
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import string from '../index.ts'

test.group('Pluralize', () => {
  test('get plural form', ({ assert }) => {
    assert.equal(string.plural('box'), 'boxes')
    assert.equal(string.plural('i'), 'we')
  })

  test('add irregular rule', ({ assert }) => {
    string.pluralize.addIrregularRule('login', 'login')
    assert.equal(string.plural('login'), 'login')
  })

  test('add uncountableRule rule', ({ assert }) => {
    string.pluralize.addUncountableRule('auth')
    assert.equal(string.plural('auth'), 'auth')
  })

  test('get singular form', ({ assert }) => {
    assert.equal(string.singular('boxes'), 'box')
  })

  test('fix pluralize package inflection gaps', ({ assert }) => {
    const inflections = [
      ['bias', 'biases'],
      ['canvas', 'canvases'],
      ['cache', 'caches'],
      ['cliche', 'cliches'],
      ['fez', 'fezzes'],
      ['lens', 'lenses'],
      ['niche', 'niches'],
      ['quiche', 'quiches'],
      ['veto', 'vetoes'],
    ]

    inflections.forEach(([single, many]) => {
      assert.equal(string.plural(single), many)
      assert.equal(string.singular(many), single)
    })
  })

  test('fix pluralize package inflection gaps in compound words', ({ assert }) => {
    assert.equal(string.singular('user_caches'), 'user_cache')
    assert.equal(string.singular('UserCaches'), 'UserCache')
    assert.equal(string.singular('image_canvases'), 'image_canvas')
    assert.equal(string.singular('SearchBiases'), 'SearchBias')
  })

  test('continue supporting pluralize package inflections', ({ assert }) => {
    const inflections = [
      ['box', 'boxes'],
      ['watch', 'watches'],
      ['branch', 'branches'],
      ['church', 'churches'],
      ['beach', 'beaches'],
      ['brooch', 'brooches'],
      ['bus', 'buses'],
      ['gas', 'gases'],
      ['alias', 'aliases'],
      ['atlas', 'atlases'],
      ['status', 'statuses'],
      ['matrix', 'matrices'],
      ['vertex', 'vertices'],
      ['index', 'indices'],
      ['wolf', 'wolves'],
      ['knife', 'knives'],
    ]

    inflections.forEach(([single, many]) => {
      assert.equal(string.plural(single), many)
      assert.equal(string.singular(many), single)
    })
  })

  test('pluralize based on count', ({ assert }) => {
    assert.equal(string.pluralize('box', 2), 'boxes')
    assert.equal(string.pluralize('box', 1), 'box')
    assert.equal(string.pluralize('boxes', 1), 'box')
    assert.equal(string.pluralize('caches', 1), 'cache')
  })
})
