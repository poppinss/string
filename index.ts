/*
 * @poppinss/string
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import bytes from './src/bytes.ts'
import { uuid } from './src/uuid.ts'
import seconds from './src/seconds.ts'
import { slug } from './src/slugify.ts'
import { random } from './src/random.ts'
import { excerpt } from './src/excerpt.ts'
import { justify } from './src/justify.ts'
import { ordinal } from './src/ordinal.ts'
import { truncate } from './src/truncate.ts'
import { sentence } from './src/sentence.ts'
import { wordWrap } from './src/word_wrap.ts'
import milliseconds from './src/milliseconds.ts'
import { htmlEscape } from './src/html_escape.ts'
import { interpolate } from './src/interpolate.ts'
import { toUnixSlash } from './src/to_unix_slash.ts'
import { plural, pluralize, singular, isPlural, isSingular } from './src/pluralize.ts'
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
} from './src/change_case.ts'

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
  justify,
  uuid,
  toUnixSlash,
}

export default string
