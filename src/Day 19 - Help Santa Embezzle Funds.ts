import type { Dec } from './tools/math';

export type Rebuild<
  A extends readonly number[],
  C extends '🛹' | '🚲' | '🛴' | '🏄' = '🛹',
> = A extends readonly [infer H extends number, ...infer T extends number[]]
  ? [...Repeat<C, H>, ...Rebuild<T, Next<C>>]
  : [];

type Next<S extends '🛹' | '🚲' | '🛴' | '🏄'> = S extends '🛹'
  ? '🚲'
  : S extends '🚲'
  ? '🛴'
  : S extends '🛴'
  ? '🏄'
  : '🛹';

type Repeat<T, N extends number> = N extends 0 ? [] : [T, ...Repeat<T, Dec<N>>];
