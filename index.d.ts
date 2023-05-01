// ./index.d.ts

/**
 * convert `str` to ms
 */
export type Units =
  'nanosecond' | 'ns' |
  'µs' | 'μs' | 'us' | 'microsecond' |
  'millisecond' | 'ms' |
  'second' | 'sec' | 's' |
  'minute' | 'min' | 'm' |
  'hour' | 'hr' | 'h' |
  'day' | 'd' |
  'week' | 'wk' | 'w' |
  'month' | 'b' |
  'year' | 'yr' | 'y'

declare const parse: ((input: string, format?: Units) => number | undefined) & {
  [key: string]: number;
};

export default parse;
