import { beNever, describe, equal, expect, it } from 'typroof';

import type { FindSanta } from './Day 12 - Find Santa';

describe('FindSanta', () => {
  it('should return the index of the first `"🎅🏼"` in the array', () => {
    expect<FindSanta<['🎅🏼', '🎄', '🎄', '🎄']>>().to(equal<0>);
    expect<FindSanta<['🎄', '🎅🏼', '🎄', '🎄', '🎄', '🎄']>>().to(equal<1>);
    expect<FindSanta<['🎄', '🎄', '🎅🏼', '🎄']>>().to(equal<2>);
    expect<FindSanta<['🎄', '🎄', '🎄', '🎅🏼', '🎄']>>().to(equal<3>);
  });

  it('should return `never` if there is no `"🎅🏼"` in the array', () => {
    expect<FindSanta<['🎄', '🎄', '🎄', '🎄']>>().to(beNever);
  });
});
