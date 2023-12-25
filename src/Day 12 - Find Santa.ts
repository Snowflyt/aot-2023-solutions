import type { Inc } from './tools/math';

export type FindSanta<T extends string[], N extends number = 0> = T extends [
  infer H,
  ...infer T extends string[],
]
  ? H extends '🎅🏼'
    ? N
    : FindSanta<T, Inc<N>>
  : never;
