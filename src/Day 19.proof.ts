import { expect, test } from 'typroof';

import type { Rebuild } from './Day 19 - Help Santa Embezzle Funds';

test('Rebuild', () => {
  // prettier-ignore
  type test_0_expected =  [
    '🛹', '🛹',
    '🚲',
    '🛴', '🛴', '🛴',
    '🏄', '🏄', '🏄',
    '🛹',
    '🚲',
    '🛴', '🛴',
  ];
  expect<Rebuild<[2, 1, 3, 3, 1, 1, 2]>>().toEqual<test_0_expected>();

  // prettier-ignore
  type test_1_expected = [
    '🛹', '🛹', '🛹',
    '🚲', '🚲', '🚲',
    '🛴', '🛴',
    '🏄',
    '🛹', '🛹',
    '🚲',
    '🛴', '🛴'
  ];
  expect<Rebuild<[3, 3, 2, 1, 2, 1, 2]>>().toEqual<test_1_expected>();

  // prettier-ignore
  type test_2_expected = [
    '🛹', '🛹',
    '🚲', '🚲', '🚲',
    '🛴', '🛴', '🛴',
    '🏄', '🏄', '🏄', '🏄', '🏄',
    '🛹',
    '🚲',
    '🛴', '🛴',
  ];
  expect<Rebuild<[2, 3, 3, 5, 1, 1, 2]>>().toEqual<test_2_expected>();
});
