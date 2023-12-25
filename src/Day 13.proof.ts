import { expect, test } from 'typroof';

import type { DayCounter } from './Day 13 - Count the Days';

test('DayCounter', () => {
  type TwelveDaysOfChristmas = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  expect<DayCounter<1, 12>>().toEqual<TwelveDaysOfChristmas>();

  // prettier-ignore
  type DaysUntilChristmas =
    | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
    | 21 | 22 | 23 | 24 | 25;
  expect<DayCounter<1, 25>>().toEqual<DaysUntilChristmas>();
});
