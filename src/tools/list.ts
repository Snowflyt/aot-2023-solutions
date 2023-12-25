import type { Dec } from './math';

type Mutate<
  A extends unknown[],
  B extends readonly unknown[],
> = B extends unknown[] ? A : Readonly<A>;

export type Take<A extends readonly unknown[], N extends number> = Mutate<
  _Take<A, N>,
  A
> extends infer U extends readonly unknown[]
  ? U
  : never;
type _Take<A extends readonly unknown[], N extends number> = N extends 0
  ? []
  : A extends readonly [infer H, ...infer T extends unknown[]]
  ? [H, ..._Take<T, Dec<N>>]
  : [];

export type Drop<A extends readonly unknown[], N extends number> = _Drop<
  A,
  N
> extends infer U extends readonly unknown[]
  ? U
  : never;
type _Drop<A extends readonly unknown[], N extends number> = N extends 0
  ? { -readonly [P in keyof A]: A[P] }
  : A extends readonly [unknown, ...infer T extends unknown[]]
  ? _Drop<T, Dec<N>>
  : [];
