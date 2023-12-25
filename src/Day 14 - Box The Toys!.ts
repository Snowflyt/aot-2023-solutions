import type { Dec } from './tools/math';

export type BoxToys<S extends string, N extends number> = N extends 0
  ? []
  : [S, ...BoxToys<S, Dec<N>>];
