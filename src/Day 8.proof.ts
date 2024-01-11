import { equal, expect, test } from 'typroof';

import type { RemoveNaughtyChildren } from './Day 8 - Filtering The Children (part 3)';

test('RemoveNaughtyChildren', () => {
  type SantasList = {
    naughty_tom: { address: '1 candy cane lane' };
    good_timmy: { address: '43 chocolate dr' };
    naughty_trash: { address: '637 starlight way' };
    naughty_candace: { address: '12 aurora' };
  };
  type test_wellBehaved_expected = {
    good_timmy: { address: '43 chocolate dr' };
  };
  expect<RemoveNaughtyChildren<SantasList>>().to(
    equal<test_wellBehaved_expected>,
  );

  type Unrelated = {
    dont: 'cheat';
    naughty_play: 'fair';
  };
  type test_Unrelated_expected = {
    dont: 'cheat';
  };
  expect<RemoveNaughtyChildren<Unrelated>>().to(equal<test_Unrelated_expected>);
});
