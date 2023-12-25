import type { Inc } from './tools/math';

export type DayCounter<S extends number, E extends number> = S extends E
  ? S
  : S | DayCounter<Inc<S>, E>;
