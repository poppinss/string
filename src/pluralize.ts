/*
 * @poppinss/string
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { default as pluralizePkg } from 'pluralize'

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Compatibility rules for words pluralize either keeps unchanged in singular
 * form, or singularizes by removing too much from the plural form.
 */
const suffixInflections = [
  ['bias', 'biases'],
  ['canvas', 'canvases'],
  ['cache', 'caches'],
  ['cliche', 'cliches'],
  ['fez', 'fezzes'],
  ['lens', 'lenses'],
  ['niche', 'niches'],
  ['quiche', 'quiches'],
  ['veto', 'vetoes'],
] as const

/**
 * Nouns ending in "ie". Pluralize singularizes their plural form as if
 * the noun ends in "y". For example: "cookies" becomes "cooky", in the
 * same way that "cities" becomes "city".
 */
const ieSuffixWords = [
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
] as const

const ieSuffixInflections = ieSuffixWords.map((word) => [word, `${word}s`] as const)

;[...suffixInflections, ...ieSuffixInflections].forEach(([singular, plural]) => {
  const suffix = plural.slice(singular.length)
  const escapedSingular = escapeRegExp(singular)
  const escapedSuffix = escapeRegExp(suffix)

  pluralizePkg.addPluralRule(new RegExp(`(${escapedSingular})$`, 'i'), `$1${suffix}`)
  pluralizePkg.addSingularRule(new RegExp(`(${escapedSingular})${escapedSuffix}$`, 'i'), '$1')
})

/**
 * Pluralize a word based upon the count. The method returns the
 * singular form when count is 1.
 */
export function pluralize(word: string, count?: number, inclusive?: boolean): string {
  return pluralizePkg(word, count, inclusive)
}
pluralize.addPluralRule = pluralizePkg.addPluralRule
pluralize.addSingularRule = pluralizePkg.addSingularRule
pluralize.addIrregularRule = pluralizePkg.addIrregularRule
pluralize.addUncountableRule = pluralizePkg.addUncountableRule

export const plural = pluralizePkg.plural
export const singular = pluralizePkg.singular
export const isPlural = pluralizePkg.isPlural
export const isSingular = pluralizePkg.isSingular
