# @poppinss/string

> A collection of helpers to perform operations on/related to a string value.

[![gh-workflow-image]][gh-workflow-url] [![npm-image]][npm-url] ![][typescript-image] [![license-image]][license-url]

## Installation

Install the package from the npm package registry.

```sh
# Npm
npm i @poppinss/string

# Yarn
yarn add @poppinss/string

# Pnpm
pnpm add @poppinss/string
```

## Usage

Import the package as follows to access the helpers.

```ts
import string from '@poppinss/string'
```

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

  - [excerpt](#excerpt)
  - [truncate](#truncate)
  - [slug](#slug)
  - [interpolate](#interpolate)
  - [plural](#plural)
  - [singular](#singular)
  - [pluralize](#pluralize)
  - [isPlural](#isplural)
  - [isSingular](#issingular)
  - [camelCase](#camelcase)
  - [capitalCase](#capitalcase)
  - [dashCase](#dashcase)
  - [dotCase](#dotcase)
  - [noCase](#nocase)
  - [pascalCase](#pascalcase)
  - [sentenceCase](#sentencecase)
  - [snakeCase](#snakecase)
  - [titleCase](#titlecase)
  - [wordWrap](#wordwrap)
  - [htmlEscape](#htmlescape)
  - [justify](#justify)
  - [random](#random)
  - [toSentence](#tosentence)
  - [condenseWhitespace](#condensewhitespace)
  - [ordinal](#ordinal)
  - [seconds.(parse/format)](#secondsparseformat)
  - [milliseconds.(parse/format)](#millisecondsparseformat)
  - [bytes.(parse/format)](#bytesparseformat)
  - [String builder](#string-builder)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### excerpt

Generate an excerpt from a string value. If the input value contains HTML tags, we will remove them from the excerpt.

```ts
import string from '@poppinss/string'

const html = `<p>AdonisJS is a Node.js framework, and hence it requires Node.js to be installed on your computer. To be precise, we need at least the latest release of <code>Node.js v14</code>.</p>`

console.log(string.excerpt(html, 70))
// AdonisJS is a Node.js framework, and hence it requires Node.js to be i...
```

| Argument                | Type    | Description                                                                                                                      |
| ----------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `sentence`              | string  | The value for which to generate excerpt                                                                                          |
| `charactersLimit`       | string  | The number of characters to keep                                                                                                 |
| `options.completeWords` | boolean | When set to `true`, the truncation will happen only after complete words. This option might go over the defined characters limit |
| `options.suffix`        | string  | The value to append after the truncated string. Defaults to three dots `...`                                                     |

### truncate

Truncate a string value to a certain length. The method is the same as the `excerpt` method but does not remove any HTML tags. It is a great fit when you are truncating a non-HTML string.

```ts
import string from '@poppinss/string'

const text = `AdonisJS is a Node.js framework, and hence it requires Node.js to be installed on your computer. To be precise, we need at least the latest release of Node.js 14.`

console.log(string.truncate(text, 70))
// AdonisJS is a Node.js framework, and hence it requires Node.js to be i...
```

| Argument                | Type    | Description                                                                                                                      |
| ----------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `sentence`              | string  | The value to truncate                                                                                                            |
| `charactersLimit`       | string  | The number of characters to keep                                                                                                 |
| `options.completeWords` | boolean | When set to `true`, the truncation will happen only after complete words. This option might go over the defined characters limit |
| `options.suffix`        | string  | The value to append after the truncated string. Defaults to three dots `...`                                                     |

### slug

Generate slug for a string value. The method is exported directly from the [slugify](https://www.npmjs.com/package/slugify) package.

Please check the package documentation for [available options](https://www.npmjs.com/package/slugify#options).

```ts
import string from '@poppinss/string'

console.log(string.slug('hello ♥ world'))
// hello-love-world
```

You can add custom replacements for Unicode values as follows.

```ts
import string from '@poppinss/string'

string.slug.extend({ '☢': 'radioactive' })
console.log(string.slug('unicode ♥ is ☢'))
// unicode-love-is-radioactive
```

### interpolate

Interpolate variables inside a string. The variables must be inside double curly braces.

```ts
import string from '@poppinss/string'

string.interpolate('hello {{ user.username }}', { user: { username: 'virk' } })

// hello virk
```

You can also replace array values by mentioning the array index.

```ts
import string from '@poppinss/string'

string.interpolate('hello {{ users.0 }}', { users: ['virk'] })

// hello virk
```

You can escape the curly braces by prefixing them with `\\`.

```ts
import string from '@poppinss/string'

string.interpolate('hello \\{{ users.0 }}', {})

// hello {{ users.0 }}
```

### plural

Convert a word to its plural form. The method is exported directly from the [pluralize](https://www.npmjs.com/package/pluralize) package.

```ts
import string from '@poppinss/string'

string.plural('test')
// tests
```

### singular

Convert a word to its singular form. The method is exported directly from the [pluralize](https://www.npmjs.com/package/pluralize) package.

```ts
import string from '@poppinss/string'

string.singular('tests')
// test
```

### pluralize

This method combines the `singular` and `plural` methods and uses one or the other based on the count. For example:

```ts
import string from '@poppinss/string'

string.pluralize('box', 1) // box
string.pluralize('box', 2) // boxes
string.pluralize('box', 0) // boxes

string.pluralize('boxes', 1) // box
string.pluralize('boxes', 2) // boxes
string.pluralize('boxes', 0) // boxes
```

The `addPluralRule`, `addSingularRule`, `addIrregularRule`, and `addUncountableRule` methods exposed by the pluralize package can be called as follows.

```ts
string.pluralize.addUncountableRule('paper')
string.pluralize.addSingularRule(/singles$/i, 'singular')
```

### isPlural

Find if a word is already in plural form. The method is exported directly from the [pluralize](https://www.npmjs.com/package/pluralize) package.

```ts
import string from '@poppinss/string'

string.isPlural('tests') // true
```

### isSingular

Find if a word is already in a singular form. The method is exported directly from the [pluralize](https://www.npmjs.com/package/pluralize) package.

```ts
import string from '@poppinss/string'

string.isSingular('test') // true
```

### camelCase

Convert a string value to camelcase.

```ts
import string from '@poppinss/string'

string.camelCase('user_name') // userName
```

Following are some of the conversion examples.

| Input            | Output        |
| ---------------- | ------------- |
| 'test'           | 'test'        |
| 'test string'    | 'testString'  |
| 'Test String'    | 'testString'  |
| 'TestV2'         | 'testV2'      |
| '_foo_bar_'      | 'fooBar'      |
| 'version 1.2.10' | 'version1210' |
| 'version 1.21.0' | 'version1210' |

### capitalCase

Convert a string value to a capital case.

```ts
import string from '@poppinss/string'

string.capitalCase('helloWorld') // Hello World
```

Following are some of the conversion examples.

| Input            | Output           |
| ---------------- | ---------------- |
| 'test'           | 'Test'           |
| 'test string'    | 'Test String'    |
| 'Test String'    | 'Test String'    |
| 'TestV2'         | 'Test V 2'       |
| 'version 1.2.10' | 'Version 1.2.10' |
| 'version 1.21.0' | 'Version 1.21.0' |

### dashCase

Convert a string value to a dash case.

```ts
import string from '@poppinss/string'

string.dashCase('helloWorld') // hello-world
```

Optionally, you can capitalize the first letter of each word.

```ts
import string from '@poppinss/string'

string.dashCase('helloWorld', { capitalize: true }) // Hello-World
```

Following are some of the conversion examples.

| Input            | Output         |
| ---------------- | -------------- |
| 'test'           | 'test'         |
| 'test string'    | 'test-string'  |
| 'Test String'    | 'test-string'  |
| 'Test V2'        | 'test-v2'      |
| 'TestV2'         | 'test-v-2'     |
| 'version 1.2.10' | 'version-1210' |
| 'version 1.21.0' | 'version-1210' |

### dotCase

Convert a string value to a dot case.

```ts
import string from '@poppinss/string'

string.dotCase('helloWorld') // hello.World
```

Optionally, you can also convert the first letter of all the words to lowercase.

```ts
import string from '@poppinss/string'

string.dotCase('helloWorld', { lowerCase: true }) // hello.world
```

Following are some of the conversion examples.

| Input            | Output         |
| ---------------- | -------------- |
| 'test'           | 'test'         |
| 'test string'    | 'test.string'  |
| 'Test String'    | 'Test.String'  |
| 'dot.case'       | 'dot.case'     |
| 'path/case'      | 'path.case'    |
| 'TestV2'         | 'Test.V.2'     |
| 'version 1.2.10' | 'version.1210' |
| 'version 1.21.0' | 'version.1210' |

### noCase

Remove all sorts of casing from a string value.

```ts
import string from '@poppinss/string'

string.noCase('helloWorld') // hello world
```

Following are some of the conversion examples.

| Input                  | Output                 |
| ---------------------- | ---------------------- |
| 'test'                 | 'test'                 |
| 'TEST'                 | 'test'                 |
| 'testString'           | 'test string'          |
| 'testString123'        | 'test string123'       |
| 'testString_1_2_3'     | 'test string 1 2 3'    |
| 'ID123String'          | 'id123 string'         |
| 'foo bar123'           | 'foo bar123'           |
| 'a1bStar'              | 'a1b star'             |
| 'CONSTANT_CASE '       | 'constant case'        |
| 'CONST123_FOO'         | 'const123 foo'         |
| 'FOO_bar'              | 'foo bar'              |
| 'XMLHttpRequest'       | 'xml http request'     |
| 'IQueryAArgs'          | 'i query a args'       |
| 'dot.case'             | 'dot case'             |
| 'path/case'            | 'path case'            |
| 'snake_case'           | 'snake case'           |
| 'snake_case123'        | 'snake case123'        |
| 'snake_case_123'       | 'snake case 123'       |
| '"quotes"'             | 'quotes'               |
| 'version 0.45.0'       | 'version 0 45 0'       |
| 'version 0..78..9'     | 'version 0 78 9'       |
| 'version 4_99/4'       | 'version 4 99 4'       |
| ' test '               | 'test'                 |
| 'something_2014_other' | 'something 2014 other' |
| 'amazon s3 data'       | 'amazon s3 data'       |
| 'foo_13_bar'           | 'foo 13 bar'           |

### pascalCase

Convert a string value to pascal case. Great for generating JavaScript class names.

```ts
import string from '@poppinss/string'

string.pascalCase('user team') // UserTeam
```

Following are some of the conversion examples.

| Input            | Output        |
| ---------------- | ------------- |
| 'test'           | 'Test'        |
| 'test string'    | 'TestString'  |
| 'Test String'    | 'TestString'  |
| 'TestV2'         | 'TestV2'      |
| 'version 1.2.10' | 'Version1210' |
| 'version 1.21.0' | 'Version1210' |

### sentenceCase

Convert a value to a sentence.

```ts
import string from '@poppinss/string'

string.sentenceCase('getting-started-with-adonisjs')
// Getting started with adonisjs
```

Following are some of the conversion examples.

| Input            | Output           |
| ---------------- | ---------------- |
| 'test'           | 'Test'           |
| 'test string'    | 'Test string'    |
| 'Test String'    | 'Test string'    |
| 'TestV2'         | 'Test v2'        |
| 'version 1.2.10' | 'Version 1 2 10' |
| 'version 1.21.0' | 'Version 1 21 0' |

### snakeCase

Convert value to snake case.

```ts
import string from '@poppinss/string'

string.snakeCase('user team') // user_team
```

Following are some of the conversion examples.

| Input            | Output         |
| ---------------- | -------------- |
| '\_id'           | 'id'           |
| 'test'           | 'test'         |
| 'test string'    | 'test_string'  |
| 'Test String'    | 'test_string'  |
| 'Test V2'        | 'test_v2'      |
| 'TestV2'         | 'test_v_2'     |
| 'version 1.2.10' | 'version_1210' |
| 'version 1.21.0' | 'version_1210' |

### titleCase

Convert a string value to title case.

```ts
import string from '@poppinss/string'

string.titleCase('small word ends on')
// Small Word Ends On
```

Following are some of the conversion examples.

| Input                              | Output                             |
| ---------------------------------- | ---------------------------------- |
| 'one. two.'                        | 'One. Two.'                        |
| 'a small word starts'              | 'A Small Word Starts'              |
| 'small word ends on'               | 'Small Word Ends On'               |
| 'we keep NASA capitalized'         | 'We Keep NASA Capitalized'         |
| 'pass camelCase through'           | 'Pass camelCase Through'           |
| 'follow step-by-step instructions' | 'Follow Step-by-Step Instructions' |
| 'this vs. that'                    | 'This vs. That'                    |
| 'this vs that'                     | 'This vs That'                     |
| 'newcastle upon tyne'              | 'Newcastle upon Tyne'              |
| 'newcastle \*upon\* tyne'          | 'Newcastle \*upon\* Tyne'          |

### wordWrap

Wrap words in a sentence after a given characters count. The sentence is always split after a word finishes, therefore some lines may exceed or may stay smaller than the provided length.

| Option    | Description                                                                |
| --------- | -------------------------------------------------------------------------- |
| `indent`  | Characters to use for indenting text after the first line                  |
| `width`   | Number of characters after which to split the line                         |
| `newLine` | Specify the new line character to use for splitting lines. Default to `\n` |
| `escape`  | Specify a function to escape contents of one line at a time                |

```ts
import string from '@poppinss/string'

const sentence = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

const output = string.wordWrap(sentence, { width: 40 })

/**
Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem
Ipsum has been the industry's standard
dummy text ever since the 1500s, when an
unknown printer took a galley of type
and scrambled it to make a type specimen
book.

It has survived not only five centuries,
but also the leap into electronic
typesetting, remaining essentially
unchanged.

It was popularised in the 1960s with the
release of Letraset sheets containing
Lorem Ipsum passages, and more recently
with desktop publishing software like
Aldus PageMaker including versions of
Lorem Ipsum.
*/
```

You can also indent lines with a given character. In the following example, we indent lines with 2 spaces.

```ts
const output = string.wordWrap(sentence, {
  width: 40,
  indent: '  ',
})

/**
Lorem Ipsum is simply dummy text of the
  printing and typesetting industry. Lorem
  Ipsum has been the industry's standard
  dummy text ever since the 1500s, when an
  unknown printer took a galley of type
  and scrambled it to make a type specimen
  book.

  It has survived not only five centuries,
  but also the leap into electronic
  typesetting, remaining essentially
  unchanged.

  It was popularised in the 1960s with the
  release of Letraset sheets containing
  Lorem Ipsum passages, and more recently
  with desktop publishing software like
  Aldus PageMaker including versions of
  Lorem Ipsum.
*/
```

### htmlEscape

Escape special characters in the given string of text, such that it can be interpolated in HTML content. This function will escape the following characters: `"`, `'`, `&`, `<`, and `>`.

```ts
import string from '@poppinss/string'

string.htmlEscape('&foo <> bar "fizz" l\'a')
// Output: &amp;foo &lt;&gt; bar &quot;fizz&quot; l&#39;a
```

Following are some examples.

| Input                                | Output                               |
| ------------------------------------ | ------------------------------------ |
| `htmlEscape('&<>"\'')`               | `'&amp;&lt;&gt;&quot;&#39;'`         |
| `htmlEscape('🦄 & 🐐')`              | `'🦄 &amp; 🐐'`                      |
| `htmlEscape('Hello <em>World</em>')` | `'Hello &lt;em&gt;World&lt;/em&gt;'` |
| `htmlEscape('no escape')`            | `'no escape'`                        |
| `htmlEscape('foo&bar')`              | `'foo&amp;bar'`                      |
| `htmlEscape('<tag>')`                | `'&lt;tag&gt;'`                      |
| `htmlEscape("test=\'foo\'")`         | `'test=&#39;foo&#39;'`               |
| `htmlEscape('test="foo"')`           | `'test=&quot;foo&quot;'`             |
| `htmlEscape('<ta\'&g">')`            | `'&lt;ta&#39;&amp;g&quot;&gt;'`      |
| `htmlEscape('foo<<bar')`             | `'foo&lt;&lt;bar'`                   |

### justify

Justify text of multiple columns as per the define max width. Columns smaller than the provided max width will be padded with empty spaces or the provided `indent` char.

```ts
import string from '@poppinss/string'

const output = string.justify(['help', 'serve', 'make:controller'], {
  width: 20,
})

/**
[
  'help                ',
  'serve               ',
  'make:controller     ',
]
*/
```

By default the columns are left aligned. However, they can also be right aligned using the `align` option.

```ts
const output = string.justify(['help', 'serve', 'make:controller'], {
  width: 20,
  align: 'right',
})

/**
[
  '                help',
  '               serve',
  '     make:controller',
]
*/
```

If the columns contains ANSI escape sequences, then you must specify a custom `getLength` method to compute the column length without counting ANSI escape sequences.

```ts
import stringWidth from 'string-width'

const output = string.justify(['help', 'serve', 'make:controller'], {
  width: 20,
  align: 'right',
  /**
   * The `string-width` package returns the length of the string
   * without accounting for ANSI escape sequences
   */
  getLength: (chunk) => stringWidth(chunk),
})
```

### random

Generate a cryptographically secure random string of a given length. The output value is URL safe base64 encoded string.

```ts
import string from '@poppinss/string'

string.random(32)
// 8mejfWWbXbry8Rh7u8MW3o-6dxd80Thk
```

### toSentence

Convert an array of words to a comma-separated sentence.

```ts
import string from '@poppinss/string'

string.toSentence(['routes', 'controllers', 'middleware'])
// routes, controllers, and middleware
```

You can replace the `and` with an `or` by specifying the `options.lastSeparator` property.

```ts
import string from '@poppinss/string'

string.toSentence(['routes', 'controllers', 'middleware'], {
  lastSeparator: ', or ',
})
```

In the following example, the two words are combined using the `and` separator, not the comma (usually advocated in English). However, you can use a custom separator for a pair of words.

```ts
import string from '@poppinss/string'

string.toSentence(['routes', 'controllers'])
// routes and controllers

string.toSentence(['routes', 'controllers'], {
  pairSeparator: ', and ',
})
// routes, and controllers
```

### condenseWhitespace

Remove multiple whitespaces from a string to a single whitespace.

```ts
import string from '@poppinss/string'

string.condenseWhitespace('hello  world')
// hello world

string.condenseWhitespace('  hello  world  ')
// hello world
```

### ordinal

Get the ordinal letter for a given number.

```ts
import string from '@poppinss/string'

string.ordinal(1) // 1st
string.ordinal(2) // '2nd'
string.ordinal(3) // '3rd'
string.ordinal(4) // '4th'

string.ordinal(23) // '23rd'
string.ordinal(24) // '24th'
```

### seconds.(parse/format)

Parse a string-based time expression to seconds.

```ts
import string from '@poppinss/string'

string.seconds.parse('10h') // 36000
string.seconds.parse('1 day') // 86400
```

Passing a numeric value to the `parse` method is returned as it is, assuming the value is already in seconds.

```ts
import string from '@poppinss/string'

string.seconds.parse(180) // 180
```

You can format seconds to a pretty string using the `format` method.

```ts
import string from '@poppinss/string'

string.seconds.format(36000) // 10h
string.seconds.format(36000, true) // 10 hours
```

### milliseconds.(parse/format)

Parse a string-based time expression to milliseconds.

```ts
import string from '@poppinss/string'

string.milliseconds.parse('1 h') // 3.6e6
string.milliseconds.parse('1 day') // 8.64e7
```

Passing a numeric value to the `parse` method is returned as it is, assuming the value is already in milliseconds.

```ts
import string from '@poppinss/string'

string.milliseconds.parse(180) // 180
```

Using the `format` method, you can format milliseconds to a pretty string.

```ts
import string from '@poppinss/string'

string.seconds.format(3.6e6) // 1h
string.seconds.format(3.6e6, true) // 1 hour
```

### bytes.(parse/format)

Parse a string-based unit expression to bytes.

```ts
import string from '@poppinss/string'

string.bytes.parse('1KB') // 1024
string.bytes.parse('1MB') // 1048576
```

Passing a numeric value to the `parse` method is returned as it is, assuming the value is already in bytes.

```ts
import string from '@poppinss/string'

string.bytes.parse(1024) // 1024
```

Using the `format` method, you can format bytes to a pretty string. The method is exported directly from the [bytes](https://www.npmjs.com/package/bytes) package. Please reference the package README for available options.

```ts
import string from '@poppinss/string'

string.bytes.format(1048576) // 1MB
string.bytes.format(1024 * 1024 * 1000) // 1000MB
string.bytes.format(1024 * 1024 * 1000, { thousandsSeparator: ',' }) // 1,000MB
```

### String builder

The string builder offers a fluent API for applying a set of transforms on a string value. You can create an instance of the string builder as follows.

```ts
import StringBuilder from '@poppinss/string/builder'
const builder = new StringBuilder('hello world')

const value = builder.snakeCase().suffix('_controller').toString()
assert(value === 'hello_world_controller')
```

## Contributing

One of the primary goals of Poppinss is to have a vibrant community of users and contributors who believes in the principles of the framework.

We encourage you to read the [contribution guide](https://github.com/poppinss/.github/blob/main/docs/CONTRIBUTING.md) before contributing to the framework.

## Code of Conduct

In order to ensure that the Poppinss community is welcoming to all, please review and abide by the [Code of Conduct](https://github.com/poppinss/.github/blob/main/docs/CODE_OF_CONDUCT.md).

## License

<pkg-name> is open-sourced software licensed under the [MIT license](LICENSE.md).

[gh-workflow-image]: https://img.shields.io/github/actions/workflow/status/poppinss/string/checks.yml?style=for-the-badge
[gh-workflow-url]: https://github.com/poppinss/string/actions/workflows/checks.yml 'Github action'
[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]: "typescript"
[npm-image]: https://img.shields.io/npm/v/@poppinss/string.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@poppinss/string 'npm'
[license-image]: https://img.shields.io/npm/l/@poppinss/string?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md 'license'
