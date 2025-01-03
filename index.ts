/*
 * @poppinss/string
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import bytes from './src/bytes.js'
import seconds from './src/seconds.js'
import { slug } from './src/slugify.js'
import { random } from './src/random.js'
import { excerpt } from './src/excerpt.js'
import { ordinal } from './src/ordinal.js'
import { truncate } from './src/truncate.js'
import { sentence } from './src/sentence.js'
import { wordWrap } from './src/word_wrap.js'
import milliseconds from './src/milliseconds.js'
import { htmlEscape } from './src/html_escape.js'
import { interpolate } from './src/interpolate.js'
import { plural, pluralize, singular, isPlural, isSingular } from './src/pluralize.js'
import {
  noCase,
  dotCase,
  dashCase,
  camelCase,
  snakeCase,
  titleCase,
  pascalCase,
  capitalCase,
  sentenceCase,
} from './src/change_case.js'

/**
 * Condense multiple whitespaces from a string
 */
function condenseWhitespace(value: string): string {
  return value.trim().replace(/\s{2,}/g, ' ')
}

const string = {
  excerpt,
  truncate,
  slug,
  interpolate,
  plural,
  pluralize,
  singular,
  isPlural,
  isSingular,
  camelCase,
  capitalCase,
  dashCase,
  dotCase,
  noCase,
  pascalCase,
  sentenceCase,
  snakeCase,
  titleCase,
  random,
  sentence,
  condenseWhitespace,
  wordWrap,
  seconds,
  milliseconds,
  bytes,
  ordinal,
  htmlEscape,
}

export default string
