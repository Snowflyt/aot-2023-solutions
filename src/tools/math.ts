export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// prettier-ignore
export type ToNumber<S extends string> = S extends `${infer R extends number}` ? R : never;

export type Inc<N extends number> = ToNumber<SInc<`${N}`>>;
export type SInc<N extends string> = SAdd<N, '1'>;

export type Dec<N extends number> = ToNumber<SDec<`${N}`>>;
export type SDec<N extends string> = SSub<N, '1'>;

export type Add<N extends number, M extends number> = ToNumber<
  SAdd<`${N}`, `${M}`>
>;
export type SAdd<N extends string, M extends string> = CompareStringLength<
  N,
  M
> extends 1
  ? ReverseString<_SAdd<ReverseString<N>, ReverseString<M>>>
  : ReverseString<_SAdd<ReverseString<M>, ReverseString<N>>>;
type _SAdd<
  N extends string,
  M extends string,
  Carry extends 0 | 1 = 0,
  Result extends string = '',
> = N extends `${infer F extends Digit}${infer R}`
  ? M extends `${infer G extends Digit}${infer S}`
    ? _AddDigit<F, G> extends infer D extends number
      ? `${D}` extends `1${infer D extends Digit}`
        ? _SAdd<R, S, 1, `${Result}${Carry extends 1 ? _AddDigit<D, 1> : D}`>
        : D extends Digit
        ? [D, Carry] extends [9, 1]
          ? _SAdd<R, S, 1, `${Result}0`>
          : _SAdd<R, S, 0, `${Result}${Carry extends 1 ? _AddDigit<D, 1> : D}`>
        : never
      : never
    : Carry extends 1
    ? `${Result}${_SAdd<N, '1'>}`
    : `${Result}${N}`
  : Carry extends 1
  ? `${Result}1`
  : Result;

/**
 * `N` must be greater than or equal to `M`.
 */
export type Sub<N extends number, M extends number> = ToNumber<
  SSub<`${N}`, `${M}`>
>;
/**
 * `N` must be greater than or equal to `M`.
 */
export type SSub<N extends string, M extends string> = RemovePaddingZeroes<
  ReverseString<_SSub<ReverseString<N>, ReverseString<M>>>
>;
type _SSub<
  N extends string,
  M extends string,
  Borrow extends 0 | 1 = 0,
  Result extends string = '',
> = N extends `${infer F extends Digit}${infer R}`
  ? M extends `${infer G extends Digit}${infer S}`
    ? Borrow extends 0
      ? _CompareDigit<F, G> extends 0 | 1
        ? _SSub<R, S, 0, `${Result}${_SubDigit<F, G>}`>
        : // prettier-ignore
          _SSub<R, S, 1, `${Result}${_AddDigit<_AddDigit<_SubDigit<9, G>, 1> extends infer U extends Digit ? U : never, F>}`>
      : F extends 0
      ? _SSub<R, S, 1, `${Result}${G extends 0 ? '9' : _SubDigit<G, 1>}`>
      : _CompareDigit<_SubDigit<F, 1>, G> extends 0 | 1
      ? _SSub<R, S, 0, `${Result}${_SubDigit<_SubDigit<F, 1>, 1>}`>
      : // prettier-ignore
        _SSub<R, S, 1, `${Result}${_AddDigit<_AddDigit<_SubDigit<9, G>, 1> extends infer U extends Digit ? U : never, F>}`>
    : Borrow extends 1
    ? `${Result}${_SSub<N, '1'>}`
    : `${Result}${N}`
  : Borrow extends 1
  ? `${Result}1`
  : Result;

type _AddDigit<N extends Digit, M extends Digit> = N extends 0
  ? M
  : M extends 0
  ? N
  : N extends 1
  ? // prettier-ignore
    M extends 1 ? 2 : M extends 2 ? 3 : M extends 3 ? 4 : M extends 4 ? 5 : M extends 5 ? 6 : M extends 6 ? 7 : M extends 7 ? 8 : M extends 8 ? 9 : 10
  : N extends 2
  ? // prettier-ignore
    M extends 1 ? 3 : M extends 2 ? 4 : M extends 3 ? 5 : M extends 4 ? 6 : M extends 5 ? 7 : M extends 6 ? 8 : M extends 7 ? 9 : M extends 8 ? 10 : 11
  : N extends 3
  ? // prettier-ignore
    M extends 1 ? 4 : M extends 2 ? 5 : M extends 3 ? 6 : M extends 4 ? 7 : M extends 5 ? 8 : M extends 6 ? 9 : M extends 7 ? 10 : M extends 8 ? 11 : 12
  : N extends 4
  ? // prettier-ignore
    M extends 1 ? 5 : M extends 2 ? 6 : M extends 3 ? 7 : M extends 4 ? 8 : M extends 5 ? 9 : M extends 6 ? 10 : M extends 7 ? 11 : M extends 8 ? 12 : 13
  : N extends 5
  ? // prettier-ignore
    M extends 1 ? 6 : M extends 2 ? 7 : M extends 3 ? 8 : M extends 4 ? 9 : M extends 5 ? 10 : M extends 6 ? 11 : M extends 7 ? 12 : M extends 8 ? 13 : 14
  : N extends 6
  ? // prettier-ignore
    M extends 1 ? 7 : M extends 2 ? 8 : M extends 3 ? 9 : M extends 4 ? 10 : M extends 5 ? 11 : M extends 6 ? 12 : M extends 7 ? 13 : M extends 8 ? 14 : 15
  : N extends 7
  ? // prettier-ignore
    M extends 1 ? 8 : M extends 2 ? 9 : M extends 3 ? 10 : M extends 4 ? 11 : M extends 5 ? 12 : M extends 6 ? 13 : M extends 7 ? 14 : M extends 8 ? 15 : 16
  : N extends 8
  ? // prettier-ignore
    M extends 1 ? 9 : M extends 2 ? 10 : M extends 3 ? 11 : M extends 4 ? 12 : M extends 5 ? 13 : M extends 6 ? 14 : M extends 7 ? 15 : M extends 8 ? 16 : 17
  : // prettier-ignore
  M extends 1 ? 10 : M extends 2 ? 11 : M extends 3 ? 12 : M extends 4 ? 13 : M extends 5 ? 14 : M extends 6 ? 15 : M extends 7 ? 16 : M extends 8 ? 17 : 18;

/**
 * `N` must be greater than or equal to `M`
 */
type _SubDigit<N extends Digit, M extends Digit> = M extends 0
  ? N
  : N extends 0
  ? 0
  : N extends 1
  ? 0
  : N extends 2
  ? // prettier-ignore
    M extends 1 ? 1 : 0
  : N extends 3
  ? // prettier-ignore
    M extends 1 ? 2 : M extends 2 ? 1 : 0
  : N extends 4
  ? // prettier-ignore
    M extends 1 ? 3 : M extends 2 ? 2 : M extends 3 ? 1 : 0
  : N extends 5
  ? // prettier-ignore
    M extends 1 ? 4 : M extends 2 ? 3 : M extends 3 ? 2 : M extends 4 ? 1 : 0
  : N extends 6
  ? // prettier-ignore
    M extends 1 ? 5 : M extends 2 ? 4 : M extends 3 ? 3 : M extends 4 ? 2 : M extends 5 ? 1 : 0
  : N extends 7
  ? // prettier-ignore
    M extends 1 ? 6 : M extends 2 ? 5 : M extends 3 ? 4 : M extends 4 ? 3 : M extends 5 ? 2 : M extends 6 ? 1 : 0
  : N extends 8
  ? // prettier-ignore
    M extends 1 ? 7 : M extends 2 ? 6 : M extends 3 ? 5 : M extends 4 ? 4 : M extends 5 ? 3 : M extends 6 ? 2 : M extends 7 ? 1 : 0
  : // prettier-ignore
  M extends 1 ? 8 : M extends 2 ? 7 : M extends 3 ? 6 : M extends 4 ? 5 : M extends 5 ? 4 : M extends 6 ? 3 : M extends 7 ? 2 : M extends 8 ? 1 : 0;

export type Compare<N extends number, M extends number> = SCompare<
  `${N}`,
  `${M}`
>;
export type SCompare<N extends string, M extends string> = CompareStringLength<
  N,
  M
> extends infer L extends number
  ? L extends 0
    ? _SCompare<N, M>
    : L
  : never;
type _SCompare<
  N extends string,
  M extends string,
> = N extends `${infer F extends Digit}${infer R}`
  ? M extends `${infer G extends Digit}${infer S}`
    ? F extends G
      ? _SCompare<R, S>
      : _CompareDigit<F, G>
    : never
  : 0;

type _CompareDigit<N extends Digit, M extends Digit> = N extends M
  ? 0
  : N extends 0
  ? -1
  : N extends 1
  ? // prettier-ignore
    M extends 0 ? 1 : -1
  : N extends 2
  ? // prettier-ignore
    M extends 0 | 1 ? 1 : -1
  : N extends 3
  ? // prettier-ignore
    M extends 0 | 1 | 2 ? 1 : -1
  : N extends 4
  ? // prettier-ignore
    M extends 0 | 1 | 2 | 3 ? 1 : -1
  : N extends 5
  ? // prettier-ignore
    M extends 0 | 1 | 2 | 3 | 4 ? 1 : -1
  : N extends 6
  ? // prettier-ignore
    M extends 0 | 1 | 2 | 3 | 4 | 5 ? 1 : -1
  : N extends 7
  ? // prettier-ignore
    M extends 0 | 1 | 2 | 3 | 4 | 5 | 6 ? 1 : -1
  : N extends 8
  ? // prettier-ignore
    M extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 ? 1 : -1
  : // prettier-ignore
  M extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 ? 1 : -1;

type CompareStringLength<
  S1 extends string,
  S2 extends string,
> = S1 extends `${string}${infer R}`
  ? S2 extends `${string}${infer S}`
    ? CompareStringLength<R, S>
    : 1
  : S2 extends ''
  ? 0
  : -1;

type ReverseString<S extends string> = S extends `${infer F}${infer R}`
  ? `${ReverseString<R>}${F}`
  : '';

type RemovePaddingZeroes<S extends string> = S extends '0'
  ? S
  : S extends `0${infer R}`
  ? RemovePaddingZeroes<R>
  : S;
