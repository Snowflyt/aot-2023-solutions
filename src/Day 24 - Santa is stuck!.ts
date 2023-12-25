import type { Dec, Inc } from './tools/math';

type Alley = '  ';
type MazeItem = '🎄' | '🎅' | Alley;
type DELICIOUS_COOKIES = '🍪';
type MazeMatrix = MazeItem[][];
type Directions = 'up' | 'down' | 'left' | 'right';

export type Move<
  M extends MazeMatrix,
  D extends Directions,
> = FindSantaPosition<M> extends readonly [
  infer R extends number,
  infer C extends number,
]
  ? MoveSanta<M, R, C, D>
  : never;

type MoveSanta<
  M extends MazeMatrix,
  R extends number,
  C extends number,
  D extends Directions,
> = D extends 'up'
  ? MoveUp<M, R, C>
  : D extends 'down'
  ? MoveDown<M, R, C>
  : D extends 'left'
  ? MoveLeft<M, R, C>
  : D extends 'right'
  ? MoveRight<M, R, C>
  : never;

type MoveUp<
  M extends MazeMatrix,
  R extends number,
  C extends number,
> = R extends 0
  ? FillWithCookies<M>
  : Get<M, Dec<R>, C> extends Exclude<MazeItem, Alley>
  ? M
  : Replace<Replace<M, Dec<R>, C, '🎅'>, R, C, Alley>;
type MoveDown<
  M extends MazeMatrix,
  R extends number,
  C extends number,
> = Inc<R> extends M['length']
  ? FillWithCookies<M>
  : Get<M, Inc<R>, C> extends Exclude<MazeItem, Alley>
  ? M
  : Replace<Replace<M, Inc<R>, C, '🎅'>, R, C, Alley>;
type MoveLeft<
  M extends MazeMatrix,
  R extends number,
  C extends number,
> = C extends 0
  ? FillWithCookies<M>
  : Get<M, R, Dec<C>> extends Exclude<MazeItem, Alley>
  ? M
  : Replace<Replace<M, R, Dec<C>, '🎅'>, R, C, Alley>;
type MoveRight<
  M extends MazeMatrix,
  R extends number,
  C extends number,
> = Inc<C> extends M[0]['length']
  ? FillWithCookies<M>
  : Get<M, R, Inc<C>> extends Exclude<MazeItem, Alley>
  ? M
  : Replace<Replace<M, R, Inc<C>, '🎅'>, R, C, Alley>;

type FillWithCookies<M extends MazeMatrix> = M extends readonly [
  infer H extends readonly MazeItem[],
  ...infer T extends MazeMatrix,
]
  ? [FillRowWithCookies<H>, ...FillWithCookies<T>]
  : [];
type FillRowWithCookies<R extends readonly MazeItem[]> = R extends readonly [
  unknown,
  ...infer T extends readonly MazeItem[],
]
  ? [DELICIOUS_COOKIES, ...FillRowWithCookies<T>]
  : [];

type Get<
  M extends MazeMatrix,
  R extends number,
  C extends number,
> = M extends readonly [
  infer H extends readonly MazeItem[],
  ...infer T extends MazeMatrix,
]
  ? R extends 0
    ? GetRow<H, C>
    : Get<T, Dec<R>, C>
  : never;
type GetRow<
  R extends readonly MazeItem[],
  C extends number,
> = R extends readonly [infer H, ...infer T extends readonly MazeItem[]]
  ? C extends 0
    ? H
    : GetRow<T, Dec<C>>
  : never;

type Replace<
  M extends MazeMatrix,
  R extends number,
  C extends number,
  V extends MazeItem,
> = M extends readonly [
  infer H extends readonly MazeItem[],
  ...infer T extends MazeMatrix,
]
  ? R extends 0
    ? ReplaceRow<H, C, V> extends infer H extends readonly MazeItem[]
      ? [H, ...T]
      : never
    : [H, ...Replace<T, Dec<R>, C, V>]
  : never;
type ReplaceRow<
  R extends readonly MazeItem[],
  C extends number,
  V extends MazeItem,
> = R extends readonly [infer H, ...infer T extends readonly MazeItem[]]
  ? C extends 0
    ? [V, ...T]
    : [H, ...ReplaceRow<T, Dec<C>, V>]
  : never;

type FindSantaPosition<
  M extends MazeMatrix,
  C extends number = 0,
> = M extends readonly [
  infer H extends readonly MazeItem[],
  ...infer T extends MazeMatrix,
]
  ? '🎅' extends H[number]
    ? readonly [C, _FindSantaIndex<H>]
    : FindSantaPosition<T, Inc<C>>
  : never;
type _FindSantaIndex<
  A extends readonly MazeItem[],
  C extends number = 0,
> = A extends readonly [infer H, ...infer T extends MazeItem[]]
  ? H extends '🎅'
    ? C
    : _FindSantaIndex<T, Inc<C>>
  : never;
