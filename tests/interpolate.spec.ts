/*
 * @poppinss/string
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import string from '../index.js'

test.group('Interpolate', () => {
  test('interpolate values inside a template', ({ assert }) => {
    assert.equal(string.interpolate('hello {{ username }}', { username: 'virk' }), 'hello virk')
  })

  test('interpolate nested values inside a template', ({ assert }) => {
    assert.equal(
      string.interpolate('hello {{user.username}}', { user: { username: 'virk' } }),
      'hello virk'
    )
  })

  test('interpolate array index', ({ assert }) => {
    assert.equal(
      string.interpolate('hello {{ users.0.username }}', { users: [{ username: 'virk' }] }),
      'hello virk'
    )
  })

  test('replace keyword with undefined when value is missing', ({ assert }) => {
    assert.equal(string.interpolate('hello {{ user.username }}', { user: {} }), 'hello undefined')
  })

  test('replace keyword with undefined when parent is missing', ({ assert }) => {
    assert.equal(string.interpolate('hello {{ user.username }}', {}), 'hello undefined')
  })

  test('replace keyword with undefined when array index is missing', ({ assert }) => {
    assert.equal(
      string.interpolate('hello {{ users.1.username }}', { users: [] }),
      'hello undefined'
    )
  })

  test('interpolate multiline string', ({ assert }) => {
    assert.equal(
      string
        .interpolate(
          `
			hello {{username}}
		`,
          { username: 'virk' }
        )
        .trim(),
      'hello virk'
    )
  })

  test('interpolate numeric values', ({ assert }) => {
    assert.equal(string.interpolate('total is {{ total }}', { total: 300 }), 'total is 300')
  })

  test('interpolate negative numeric values', ({ assert }) => {
    assert.equal(string.interpolate('total is {{ total }}', { total: -300 }), 'total is -300')
  })

  test('interpolate boolean values', ({ assert }) => {
    assert.equal(string.interpolate('it is {{ state }}', { state: false }), 'it is false')
  })

  test('interpolate dates', ({ assert }) => {
    const date = new Date()
    assert.equal(string.interpolate('it is {{ date }}', { date }), `it is ${date.toString()}`)
  })

  test('should parse a template and replace mustache like placeholders', ({ assert }) => {
    const template = string.interpolate('Hello {{name}}', { name: 'virk' })
    assert.equal(template, 'Hello virk')
  })

  test('should parse a template and replace multiple mustache like placeholders', ({ assert }) => {
    const template = string.interpolate('Hello {{ name }}, your age seems to be {{age}}', {
      name: 'virk',
      age: 22,
    })
    assert.equal(template, 'Hello virk, your age seems to be 22')
  })

  test('should parse a template and ignore whitespaces inside placeholders', ({ assert }) => {
    const template = string.interpolate('Hello {{ name }}', { name: 'virk' })
    assert.equal(template, 'Hello virk')
  })

  test('should replace array values at root level', ({ assert }) => {
    const template = string.interpolate('Hello {{ 0 }}', ['virk'])
    assert.equal(template.trim(), 'Hello virk')
  })

  test('should not replace native array keys', ({ assert }) => {
    const template = string.interpolate('Function {{splice}}', [])
    assert.equal(template.trim(), 'Function undefined')
  })

  test('should work fine when there is nothing to replace', ({ assert }) => {
    const template = string.interpolate('Hello world', {})
    assert.equal(template.trim(), 'Hello world')
  })

  test('work fine when has special chars in placeholders', ({ assert }) => {
    assert.equal(
      string.interpolate('Hello {{ user_name }}', { user_name: 'virk' }).trim(),
      'Hello virk'
    )
    assert.equal(
      string.interpolate('Hello {{ $user_name }}', { $user_name: 'virk' }).trim(),
      'Hello virk'
    )
  })

  test('work fine with nested values', ({ assert }) => {
    assert.equal(
      string.interpolate('Hello {{ user.username }}', { user: { username: 'virk' } }),
      'Hello virk'
    )
  })

  test('should replace a value whose value is zero', ({ assert }) => {
    const template = string.interpolate('Zero value {{index}}', { index: 0 })
    assert.equal(template, 'Zero value 0')
  })

  test('should work with objects with null prototype', ({ assert }) => {
    const obj = Object.create(null)
    obj.value = 'test'
    const template = string.interpolate('Value is {{value}}', obj)
    assert.equal(template, 'Value is test')
  })

  test('allow escaping interpolation braces', ({ assert }) => {
    const template = string.interpolate('Value is \\{{value}}', {})
    assert.equal(template, 'Value is {{value}}')
  })

  test('allow interpolation expression and escape sequences together', ({ assert }) => {
    const template = string.interpolate('\\{{value}} is {{value}}', { value: 10 })
    assert.equal(template, '{{value}} is 10')
  })
})
