import type { Inc } from './tools/math';

export type FindSanta<
  M extends readonly (readonly ('🎄' | '🎅🏼')[])[],
  C extends number = 0,
> = M extends readonly [
  infer H extends readonly ('🎄' | '🎅🏼')[],
  ...infer T extends (readonly ('🎄' | '🎅🏼')[])[],
]
  ? [FindSantaRow<H>] extends [never]
    ? FindSanta<T, Inc<C>>
    : [C, FindSantaRow<H>]
  : never;

type FindSantaRow<
  L extends readonly ('🎄' | '🎅🏼')[],
  C extends number = 0,
> = L extends readonly [
  infer H extends '🎄' | '🎅🏼',
  ...infer T extends ('🎄' | '🎅🏼')[],
]
  ? H extends '🎅🏼'
    ? C
    : FindSantaRow<T, Inc<C>>
  : never;
