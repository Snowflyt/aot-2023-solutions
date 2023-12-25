import { expect, test } from 'typroof';

import type { FindSanta } from './Day 16 - Find Santa (part 2)';

test('FindSanta', () => {
  type Forest0 = [
    ['🎅🏼', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
  ];
  expect<FindSanta<Forest0>>().toEqual<[0, 0]>();

  type Forest1 = [
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎅🏼', '🎄', '🎄'],
  ];
  expect<FindSanta<Forest1>>().toEqual<[3, 1]>();

  type Forest2 = [
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎅🏼', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
  ];
  expect<FindSanta<Forest2>>().toEqual<[2, 2]>();

  type Forest3 = [
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎅🏼', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
  ];
  expect<FindSanta<Forest3>>().toEqual<[2, 1]>();

  type Forest4 = [
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎅🏼', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
    ['🎄', '🎄', '🎄', '🎄'],
  ];
  expect<FindSanta<Forest4>>().toEqual<[1, 2]>();
});
