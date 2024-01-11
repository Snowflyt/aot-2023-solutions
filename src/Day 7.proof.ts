import { describe, equal, expect, it } from 'typroof';

import type { AppendGood } from './Day 7 - Filtering The Children (part 2)';

describe('AppendGood', () => {
  it('should prepend `"good"` to all keys', () => {
    type WellBehavedList = {
      tom: { address: '1 candy cane lane' };
      timmy: { address: '43 chocolate dr' };
      trash: { address: '637 starlight way' };
      candace: { address: '12 aurora' };
    };
    type test_wellBehaved_expected = {
      good_tom: { address: '1 candy cane lane' };
      good_timmy: { address: '43 chocolate dr' };
      good_trash: { address: '637 starlight way' };
      good_candace: { address: '12 aurora' };
    };
    expect<AppendGood<WellBehavedList>>().to(equal<test_wellBehaved_expected>);
  });
});
