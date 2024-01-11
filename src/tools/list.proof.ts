import { describe, equal, expect, it } from 'typroof';

import type { Drop, Take } from './list';

describe('Take', () => {
  it('should take the first `N` elements of a take', () => {
    expect<Take<['a', 'b', 'c', 'd'], 0>>().to(equal<[]>);
    expect<Take<['a', 'b', 'c', 'd'], 1>>().to(equal<['a']>);
    expect<Take<['a', 'b', 'c', 'd'], 2>>().to(equal<['a', 'b']>);
    expect<Take<['a', 'b', 'c', 'd'], 3>>().to(equal<['a', 'b', 'c']>);
    expect<Take<['a', 'b', 'c', 'd'], 4>>().to(equal<['a', 'b', 'c', 'd']>);
  });

  it('should take all elements if `N` is greater than the length of the array', () => {
    expect<Take<['a', 'b', 'c', 'd'], 5>>().to(equal<['a', 'b', 'c', 'd']>);
    expect<Take<['a', 'b', 'c', 'd'], 6>>().to(equal<['a', 'b', 'c', 'd']>);
  });
});

describe('Drop', () => {
  it('should drop the first `N` elements of a take', () => {
    expect<Drop<['a', 'b', 'c', 'd'], 0>>().to(equal<['a', 'b', 'c', 'd']>);
    expect<Drop<['a', 'b', 'c', 'd'], 1>>().to(equal<['b', 'c', 'd']>);
    expect<Drop<['a', 'b', 'c', 'd'], 2>>().to(equal<['c', 'd']>);
    expect<Drop<['a', 'b', 'c', 'd'], 3>>().to(equal<['d']>);
    expect<Drop<['a', 'b', 'c', 'd'], 4>>().to(equal<[]>);
  });

  it('should drop all elements if `N` is greater than the length of the array', () => {
    expect<Drop<['a', 'b', 'c', 'd'], 5>>().to(equal<[]>);
    expect<Drop<['a', 'b', 'c', 'd'], 6>>().to(equal<[]>);
  });
});
