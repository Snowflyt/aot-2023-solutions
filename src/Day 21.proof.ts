import { describe, expect, it } from 'typroof';

import type { NewGame, TicTacToe } from './Day 21 - Tic Tac Toe';

describe('TicTacToe', () => {
  type test_move1_expected = {
    // prettier-ignore
    board: [
      [ '  ', '❌', '  ' ],
      [ '  ', '  ', '  ' ],
      [ '  ', '  ', '  ' ],
    ];
    state: '⭕';
  };
  type test_move2_expected = {
    // prettier-ignore
    board: [
      ['⭕', '❌', '  '], 
      ['  ', '  ', '  '], 
      ['  ', '  ', '  '],
    ];
    state: '❌';
  };
  type test_move3_expected = {
    // prettier-ignore
    board: [
      [ '⭕', '❌', '  ' ],
      [ '  ', '❌', '  ' ],
      [ '  ', '  ', '  ' ],
    ];
    state: '⭕';
  };
  type test_move4_expected = {
    // prettier-ignore
    board: [
      [ '⭕', '❌', '  ' ],
      [ '  ', '❌', '  ' ],
      [ '⭕', '  ', '  ' ],
    ];
    state: '❌';
  };
  type test_move5_expected = {
    // prettier-ignore
    board: [
      [ '⭕', '❌', '  ' ],
      [ '  ', '❌', '  ' ],
      [ '⭕', '  ', '❌' ]
    ];
    state: '⭕';
  };

  it('should start a new game', () => {
    expect<TicTacToe<NewGame, 'top-center'>>().toEqual<test_move1_expected>();
  });

  it('should place a piece', () => {
    expect<
      TicTacToe<test_move1_expected, 'top-left'>
    >().toEqual<test_move2_expected>();
    expect<
      TicTacToe<test_move2_expected, 'middle-center'>
    >().toEqual<test_move3_expected>();
    expect<
      TicTacToe<test_move3_expected, 'bottom-left'>
    >().toEqual<test_move4_expected>();
    expect<
      TicTacToe<test_move4_expected, 'bottom-right'>
    >().toEqual<test_move5_expected>();
  });

  it('should check for a win', () => {
    type test_x_win_expected = {
      // prettier-ignore
      board: [
        [ '⭕', '❌', '  ' ],
        [ '  ', '❌', '  ' ],
        [ '⭕', '❌', '  ' ],
      ];
      state: '❌ Won';
    };
    expect<
      TicTacToe<test_move4_expected, 'bottom-center'>
    >().toEqual<test_x_win_expected>();

    type test_o_win_expected = {
      // prettier-ignore
      board: [
        [ '⭕', '❌', '  ' ],
        [ '⭕', '❌', '  ' ],
        [ '⭕', '  ', '❌' ],
      ];
      state: '⭕ Won';
    };
    expect<
      TicTacToe<test_move5_expected, 'middle-left'>
    >().toEqual<test_o_win_expected>();
  });

  it('should not allow a move on a non-empty cell', () => {
    expect<
      TicTacToe<test_move1_expected, 'top-center'>
    >().toEqual<test_move1_expected>();
  });

  it('should check for a draw', () => {
    type test_before_draw = {
      // prettier-ignore
      board: [
        ['⭕', '❌', '⭕'], 
        ['⭕', '❌', '❌'], 
        ['❌', '⭕', '  '],
      ];
      state: '⭕';
    };
    type test_draw_expected = {
      // prettier-ignore
      board: [
        ['⭕', '❌', '⭕'], 
        ['⭕', '❌', '❌'], 
        ['❌', '⭕', '⭕'],
      ];
      state: 'Draw';
    };
    expect<
      TicTacToe<test_before_draw, 'bottom-right'>
    >().toEqual<test_draw_expected>();
  });
});
