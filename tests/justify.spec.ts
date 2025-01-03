/*
 * @poppinss/string
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import stringWidth from 'string-width'
import useColors from '@poppinss/colors'
import { justify } from '../src/justify.js'

const colors = useColors.ansi()

test.group('justify', () => {
  test('justify a string by adding space to the end of it', ({ assert }) => {
    const width = 20
    const justifiedColumns = justify(['help', 'serve', 'make:controller'], { width })

    assert.deepEqual(justifiedColumns, [
      'help                ',
      'serve               ',
      'make:controller     ',
    ])
  })

  test('justify and right align', ({ assert }) => {
    const width = 20
    const justifiedColumns = justify(['help', 'serve', 'make:controller'], {
      width,
      align: 'right',
    })

    assert.deepEqual(justifiedColumns, [
      '                help',
      '               serve',
      '     make:controller',
    ])
  })

  test('use custom padding char', ({ assert }) => {
    const width = 20
    const justifiedColumns = justify(['help', 'serve', 'make:controller'], {
      width,
      align: 'right',
      indent: '.',
    })

    assert.deepEqual(justifiedColumns, [
      '................help',
      '...............serve',
      '.....make:controller',
    ])
  })

  test('do not add padding when column size is already same as the width', ({ assert }) => {
    const width = 15
    const justifiedColumns = justify(['help', 'serve', 'make:controller'], {
      width,
      align: 'right',
    })

    assert.deepEqual(justifiedColumns, ['           help', '          serve', 'make:controller'])
  })

  test('justify string with colors', ({ assert }) => {
    const width = 20
    const justifiedColumns = justify(
      [colors.cyan('help'), colors.cyan('serve'), colors.cyan('make:controller')],
      { width, getLength: (chunk) => stringWidth(chunk) }
    )

    assert.deepEqual(justifiedColumns, [
      `${colors.cyan('help')}                `,
      `${colors.cyan('serve')}               `,
      `${colors.cyan('make:controller')}     `,
    ])
  })
})
