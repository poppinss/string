/*
 * @poppinss/string
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import { wordWrap } from '../src/word_wrap.js'

const sentence = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

test.group('Word wrap', () => {
  test('wrap words after a certain width', ({ assert }) => {
    const lines = wordWrap(sentence, { width: 40 }).split(/\n/)
    assert.snapshot(lines).matchInline(`
      [
        "Lorem Ipsum is simply dummy text of the ",
        "printing and typesetting industry. Lorem ",
        "Ipsum has been the industry's standard ",
        "dummy text ever since the 1500s, when an ",
        "unknown printer took a galley of type ",
        "and scrambled it to make a type specimen ",
        "book.",
        "",
        "It has survived not only five centuries, ",
        "but also the leap into electronic ",
        "typesetting, remaining essentially ",
        "unchanged.",
        "",
        "It was popularised in the 1960s with the ",
        "release of Letraset sheets containing ",
        "Lorem Ipsum passages, and more recently ",
        "with desktop publishing software like ",
        "Aldus PageMaker including versions of ",
        "Lorem Ipsum.",
      ]
    `)
  })

  test('add identation', ({ assert }) => {
    const lines = wordWrap(sentence, { width: 40, indent: '  ' }).split(/\n/)
    assert.snapshot(lines).matchInline(`
      [
        "Lorem Ipsum is simply dummy text of the ",
        "  printing and typesetting industry. Lorem ",
        "  Ipsum has been the industry's standard ",
        "  dummy text ever since the 1500s, when an ",
        "  unknown printer took a galley of type ",
        "  and scrambled it to make a type specimen ",
        "  book.",
        "",
        "  It has survived not only five centuries, ",
        "  but also the leap into electronic ",
        "  typesetting, remaining essentially ",
        "  unchanged.",
        "",
        "  It was popularised in the 1960s with the ",
        "  release of Letraset sheets containing ",
        "  Lorem Ipsum passages, and more recently ",
        "  with desktop publishing software like ",
        "  Aldus PageMaker including versions of ",
        "  Lorem Ipsum.",
      ]
    `)
  })

  test('define custom new line', ({ assert }) => {
    const lines = wordWrap(sentence, { width: 40, newLine: '<br />' }).split('<br />')
    assert.snapshot(lines).matchInline(`
      [
        "Lorem Ipsum is simply dummy text of the ",
        "printing and typesetting industry. Lorem ",
        "Ipsum has been the industry's standard ",
        "dummy text ever since the 1500s, when an ",
        "unknown printer took a galley of type ",
        "and scrambled it to make a type specimen ",
        "book.
      ",
        "It has survived not only five centuries, ",
        "but also the leap into electronic ",
        "typesetting, remaining essentially ",
        "unchanged.
      ",
        "It was popularised in the 1960s with the ",
        "release of Letraset sheets containing ",
        "Lorem Ipsum passages, and more recently ",
        "with desktop publishing software like ",
        "Aldus PageMaker including versions of ",
        "Lorem Ipsum.",
      ]
    `)
  })
})
