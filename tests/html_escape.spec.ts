/*
 * @poppinss/string
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import { htmlEscape } from '../src/html_escape.js'

test('htmlEscape', ({ assert }) => {
  assert.equal(htmlEscape('&<>"\''), '&amp;&lt;&gt;&quot;&#39;')
  assert.equal(htmlEscape('🦄 & 🐐'), '🦄 &amp; 🐐')
  assert.equal(htmlEscape('Hello <em>World</em>'), 'Hello &lt;em&gt;World&lt;/em&gt;')
  assert.equal(htmlEscape('no escape'), 'no escape')
  assert.equal(htmlEscape('foo&bar'), 'foo&amp;bar')
  assert.equal(htmlEscape('<tag>'), '&lt;tag&gt;')
  assert.equal(htmlEscape("test=\'foo\'"), 'test=&#39;foo&#39;')
  assert.equal(htmlEscape('test="foo"'), 'test=&quot;foo&quot;')
  assert.equal(htmlEscape('<ta\'&g">'), '&lt;ta&#39;&amp;g&quot;&gt;')
  assert.equal(htmlEscape('foo<<bar'), 'foo&lt;&lt;bar')
  assert.strictEqual(
    htmlEscape('&foo <> bar "fizz" l\'a'),
    '&amp;foo &lt;&gt; bar &quot;fizz&quot; l&#39;a'
  )
})
