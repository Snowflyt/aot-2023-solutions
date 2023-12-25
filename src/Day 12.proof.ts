import { describe, expect, it } from 'typroof';

import type { FindSanta } from './Day 12 - Find Santa';

describe('FindSanta', () => {
  it('should return the index of the first `"🎅🏼"` in the array', () => {
    expect<FindSanta<['🎅🏼', '🎄', '🎄', '🎄']>>().toEqual(0);
    expect<FindSanta<['🎄', '🎅🏼', '🎄', '🎄', '🎄', '🎄']>>().toEqual(1);
    expect<FindSanta<['🎄', '🎄', '🎅🏼', '🎄']>>().toEqual(2);
    expect<FindSanta<['🎄', '🎄', '🎄', '🎅🏼', '🎄']>>().toEqual(3);
  });

  it('should return `never` if there is no `"🎅🏼"` in the array', () => {
    expect<FindSanta<['🎄', '🎄', '🎄', '🎄']>>().toBeNever();
  });
});
