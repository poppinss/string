/*
 * @poppinss/string
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

type TimeUnit =
  | 'Years'
  | 'Year'
  | 'Yrs'
  | 'Yr'
  | 'Y'
  | 'Weeks'
  | 'Week'
  | 'W'
  | 'Days'
  | 'Day'
  | 'D'
  | 'Hours'
  | 'Hour'
  | 'Hrs'
  | 'Hr'
  | 'H'
  | 'Minutes'
  | 'Minute'
  | 'Mins'
  | 'Min'
  | 'M'
  | 'Seconds'
  | 'Second'
  | 'Secs'
  | 'Sec'
  | 's'
  | 'Milliseconds'
  | 'Millisecond'
  | 'Msecs'
  | 'Msec'
  | 'Ms'

type TimeUnitAnyCase = TimeUnit | Uppercase<TimeUnit> | Lowercase<TimeUnit>
export type PrettyTime =
  | `${number}`
  | `${number}${TimeUnitAnyCase}`
  | `${number} ${TimeUnitAnyCase}`

type BytesUnit = 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB'

type BytesUnitAnyCase = BytesUnit | Uppercase<BytesUnit> | Lowercase<BytesUnit>
export type PrettyBytes =
  | `${number}`
  | `${number}${BytesUnitAnyCase}`
  | `${number} ${BytesUnitAnyCase}`
