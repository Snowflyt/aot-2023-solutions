import { describe, equal, expect, it } from 'typroof';

import type {
  Connect4,
  NewGame,
} from './Day 23 - Connect 4, but in TypeScript types';

describe('Connect4', () => {
  type test_move1_expected = {
    board: [
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
    ];
    state: '🔴';
  };
  type test_move2_expected = {
    board: [
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🔴', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
    ];
    state: '🟡';
  };
  type test_move3_expected = {
    board: [
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🔴', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
    ];
    state: '🔴';
  };
  type test_move4_expected = {
    board: [
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🔴', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🟡', '🔴', '  ', '  ', '  ', '  ', '  '],
    ];
    state: '🟡';
  };
  type test_move5_expected = {
    board: [
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🔴', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🟡', '🔴', '🟡', '  ', '  ', '  ', '  '],
    ];
    state: '🔴';
  };
  type test_move6_expected = {
    board: [
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
      ['🔴', '🔴', '  ', '  ', '  ', '  ', '  '],
      ['🟡', '🔴', '🟡', '  ', '  ', '  ', '  '],
    ];
    state: '🟡';
  };

  it('should start a new game', () => {
    expect<Connect4<NewGame, 0>>().to(equal<test_move1_expected>);
  });

  it('should move a chip', () => {
    expect<Connect4<test_move1_expected, 0>>().to(equal<test_move2_expected>);
    expect<Connect4<test_move2_expected, 0>>().to(equal<test_move3_expected>);
    expect<Connect4<test_move3_expected, 1>>().to(equal<test_move4_expected>);
    expect<Connect4<test_move4_expected, 2>>().to(equal<test_move5_expected>);
    expect<Connect4<test_move5_expected, 1>>().to(equal<test_move6_expected>);
  });

  it('should check for a win (row)', () => {
    expect<
      Connect4<
        {
          board: [
            ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
            ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
            ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
            ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
            ['🔴', '🔴', '🔴', '  ', '  ', '  ', '  '],
            ['🟡', '🔴', '🟡', '🟡', '  ', '  ', '  '],
          ];
          state: '🔴';
        },
        3
      >
    >().to(
      equal<{
        board: [
          ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
          ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
          ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
          ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
          ['🔴', '🔴', '🔴', '🔴', '  ', '  ', '  '],
          ['🟡', '🔴', '🟡', '🟡', '  ', '  ', '  '],
        ];
        state: '🔴 Won';
      }>,
    );

    expect<
      Connect4<
        {
          board: [
            ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
            ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
            ['🔴', '  ', '  ', '  ', '  ', '  ', '  '],
            ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
            ['🔴', '  ', '🔴', '🔴', '  ', '  ', '  '],
            ['🟡', '  ', '🟡', '🟡', '  ', '  ', '  '],
          ];
          state: '🟡';
        },
        1
      >
    >().to(
      equal<{
        board: [
          ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
          ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
          ['🔴', '  ', '  ', '  ', '  ', '  ', '  '],
          ['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
          ['🔴', '  ', '🔴', '🔴', '  ', '  ', '  '],
          ['🟡', '🟡', '🟡', '🟡', '  ', '  ', '  '],
        ];
        state: '🟡 Won';
      }>,
    );
  });

  it('should check for a win (diagonal)', () => {
    expect<
      Connect4<
        {
          board: [
            ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
            ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
            ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
            ['  ', '  ', '🟡', '🔴', '  ', '  ', '  '],
            ['🔴', '🟡', '🔴', '🔴', '  ', '  ', '  '],
            ['🟡', '🔴', '🟡', '🟡', '  ', '  ', '  '],
          ];
          state: '🟡';
        },
        3
      >
    >().to(
      equal<{
        board: [
          ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
          ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
          ['  ', '  ', '  ', '🟡', '  ', '  ', '  '],
          ['  ', '  ', '🟡', '🔴', '  ', '  ', '  '],
          ['🔴', '🟡', '🔴', '🔴', '  ', '  ', '  '],
          ['🟡', '🔴', '🟡', '🟡', '  ', '  ', '  '],
        ];
        state: '🟡 Won';
      }>,
    );
  });

  it('should check for a draw', () => {
    expect<
      Connect4<
        {
          board: [
            ['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '  '],
            ['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
            ['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
            ['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
            ['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
            ['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
          ];
          state: '🟡';
        },
        6
      >
    >().to(
      equal<{
        board: [
          ['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
          ['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
          ['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
          ['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
          ['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
          ['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
        ];
        state: 'Draw';
      }>,
    );
  });
});
