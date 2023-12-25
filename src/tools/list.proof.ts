import { describe, expect, it } from 'typroof';

import type { Drop, Take } from './list';

describe('Take', () => {
  it('should take the first `N` elements of a take', () => {
    expect<Take<['a', 'b', 'c', 'd'], 0>>().toEqual<[]>();
    expect<Take<['a', 'b', 'c', 'd'], 1>>().toEqual<['a']>();
    expect<Take<['a', 'b', 'c', 'd'], 2>>().toEqual<['a', 'b']>();
    expect<Take<['a', 'b', 'c', 'd'], 3>>().toEqual<['a', 'b', 'c']>();
    expect<Take<['a', 'b', 'c', 'd'], 4>>().toEqual<['a', 'b', 'c', 'd']>();
  });

  it('should take all elements if `N` is greater than the length of the array', () => {
    expect<Take<['a', 'b', 'c', 'd'], 5>>().toEqual<['a', 'b', 'c', 'd']>();
    expect<Take<['a', 'b', 'c', 'd'], 6>>().toEqual<['a', 'b', 'c', 'd']>();
  });
});

describe('Drop', () => {
  it('should drop the first `N` elements of a take', () => {
    expect<Drop<['a', 'b', 'c', 'd'], 0>>().toEqual<['a', 'b', 'c', 'd']>();
    expect<Drop<['a', 'b', 'c', 'd'], 1>>().toEqual<['b', 'c', 'd']>();
    expect<Drop<['a', 'b', 'c', 'd'], 2>>().toEqual<['c', 'd']>();
    expect<Drop<['a', 'b', 'c', 'd'], 3>>().toEqual<['d']>();
    expect<Drop<['a', 'b', 'c', 'd'], 4>>().toEqual<[]>();
  });

  it('should drop all elements if `N` is greater than the length of the array', () => {
    expect<Drop<['a', 'b', 'c', 'd'], 5>>().toEqual<[]>();
    expect<Drop<['a', 'b', 'c', 'd'], 6>>().toEqual<[]>();
  });
});
