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

  test('fix singular form of nouns ending in ie', ({ assert }) => {
    const words = [
      'auntie',
      'beanie',
      'birdie',
      'boogie',
      'bookie',
      'brownie',
      'budgie',
      'calorie',
      'cookie',
      'coterie',
      'freebie',
      'hoodie',
      'hottie',
      'junkie',
      'magpie',
      'menagerie',
      'newbie',
      'nightie',
      'oldie',
      'pixie',
      'prairie',
      'quickie',
      'reverie',
      'rookie',
      'roomie',
      'selfie',
      'smoothie',
      'sortie',
      'sweetie',
      'techie',
      'townie',
      'veggie',
      'yuppie',
      'movie',
      'zombie',
    ]

    words.forEach((single) => {
      assert.equal(string.plural(single), `${single}s`)
      assert.equal(string.singular(`${single}s`), single)
    })
  })

  test('fix singular form of compound nouns ending in ie', ({ assert }) => {
    assert.equal(string.singular('Cookies'), 'Cookie')
    assert.equal(string.singular('user_cookies'), 'user_cookie')
    assert.equal(string.singular('UserCookies'), 'UserCookie')
    assert.equal(string.singular('kilocalories'), 'kilocalorie')
  })

  test('continue singularizing nouns ending in a consonant and y', ({ assert }) => {
    const inflections = [
      ['city', 'cities'],
      ['party', 'parties'],
      ['family', 'families'],
      ['category', 'categories'],
      ['company', 'companies'],
      ['puppy', 'puppies'],
      ['copy', 'copies'],
      ['story', 'stories'],
      ['chippy', 'chippies'],
    ]

    inflections.forEach(([single, many]) => {
      assert.equal(string.plural(single), many)
      assert.equal(string.singular(many), single)
    })
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
