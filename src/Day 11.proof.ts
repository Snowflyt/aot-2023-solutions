import { expect, test } from 'typroof';

import type { SantaListProtector } from './Day 11 - Protect the List';

test('SantaListProtector', () => {
  type test_0_actual = SantaListProtector<{
    // ^?
    hacksore: () => 'naughty';
    trash: string;
    elliot: {
      penny: boolean;
      candace: {
        address: {
          street: { name: 'candy cane way'; num: number };
          k: 'hello';
        };
        children: ['harry', { saying: ['hey'] }];
      };
    };
  }>;
  type test_0_expected = {
    readonly hacksore: () => 'naughty';
    readonly trash: string;
    readonly elliot: {
      readonly penny: boolean;
      readonly candace: {
        readonly address: {
          readonly street: {
            readonly name: 'candy cane way';
            readonly num: number;
          };
          readonly k: 'hello';
        };
        readonly children: readonly [
          'harry',
          { readonly saying: readonly ['hey'] },
        ];
      };
    };
  };
  expect<test_0_actual>().toEqual<test_0_expected>();

  type test_1_actual = SantaListProtector<{
    // ^?
    theo: () => 'naughty';
    prime: string;
    netflix: { isChill: boolean };
  }>;
  type test_1_expected = {
    readonly theo: () => 'naughty';
    readonly prime: string;
    readonly netflix: { readonly isChill: boolean };
  };
  expect<test_1_actual>().toEqual<test_1_expected>();
});
