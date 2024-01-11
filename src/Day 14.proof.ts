import { describe, equal, expect, it } from 'typroof';

import type { BoxToys } from './Day 14 - Box The Toys!';

describe('BoxToys', () => {
  it('should repeat the toy `N` times', () => {
    expect<BoxToys<'doll', 1>>().to(equal<['doll']>);
  });

  it('should work when `N` is a number literal union', () => {
    expect<BoxToys<'nutcracker', 3 | 4>>().to(
      equal<
        | ['nutcracker', 'nutcracker', 'nutcracker']
        | ['nutcracker', 'nutcracker', 'nutcracker', 'nutcracker']
      >,
    );
  });
});
