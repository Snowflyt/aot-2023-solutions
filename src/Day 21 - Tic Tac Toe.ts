import type { Err, Ok } from './tools/exception';
import type { Drop, Take } from './tools/list';
import type { Inc } from './tools/math';

type TicTacToeChip = '❌' | '⭕';
type TicTacToeEndState = '❌ Won' | '⭕ Won' | 'Draw';
type TicTacToeState = TicTacToeChip | TicTacToeEndState;
type TicTacToeEmptyCell = '  ';
type TicTacToeCell = TicTacToeChip | TicTacToeEmptyCell;
type TicTacToeYPositions = 'top' | 'middle' | 'bottom';
type TicTacToeXPositions = 'left' | 'center' | 'right';
type TicTacToePositions = `${TicTacToeYPositions}-${TicTacToeXPositions}`;
type TicTactToeBoard = TicTacToeCell[][];
type TicTacToeGame = {
  board: TicTactToeBoard;
  state: TicTacToeState;
};

// prettier-ignore
type EmptyBoard = [
  ['  ', '  ', '  '], 
  ['  ', '  ', '  '], 
  ['  ', '  ', '  ']
];

export type NewGame = {
  board: EmptyBoard;
  state: '❌';
};

type CannotMoveErr = "Can't move here";

export type TicTacToe<
  G extends TicTacToeGame,
  P extends TicTacToePositions,
> = G['state'] extends TicTacToeChip
  ? StepBoard<G['board'], G['state'], P> extends Ok<
      infer NB extends TicTactToeBoard
    >
    ? CheckWin<NB, G['state']> extends true
      ? { board: NB; state: `${G['state']} Won` }
      : CheckDraw<NB> extends true
      ? { board: NB; state: 'Draw' }
      : { board: NB; state: G['state'] extends '❌' ? '⭕' : '❌' }
    : G
  : G;

type IndexOfPosition<P extends TicTacToePositions> = P extends `top-${infer X}`
  ? // prettier-ignore
    X extends 'left' ? [0, 0] : X extends 'center' ? [0, 1] : [0, 2]
  : P extends `middle-${infer X}`
  ? // prettier-ignore
    X extends 'left' ? [1, 0] : X extends 'center' ? [1, 1] : [1, 2]
  : P extends `bottom-${infer X}`
  ? // prettier-ignore
    X extends 'left' ? [2, 0] : X extends 'center' ? [2, 1] : [2, 2]
  : never;

type StepBoard<
  B extends TicTactToeBoard,
  C extends TicTacToeChip,
  P extends TicTacToePositions,
> = IndexOfPosition<P> extends readonly [
  infer Row extends number,
  infer Col extends number,
]
  ? B[Row][Col] extends TicTacToeEmptyCell
    ? Ok<
        [
          ...Take<B, Row>,
          [...Take<B[Row], Col>, C, ...Drop<B[Row], Inc<Col>>],
          ...Drop<B, Inc<Row>>,
        ]
      >
    : Err<CannotMoveErr>
  : never;

type CheckDraw<B extends TicTactToeBoard> = B extends [
  [TicTacToeChip, TicTacToeChip, TicTacToeChip],
  [TicTacToeChip, TicTacToeChip, TicTacToeChip],
  [TicTacToeChip, TicTacToeChip, TicTacToeChip],
]
  ? true
  : false;

type CheckWin<B extends TicTactToeBoard, C extends string> = [
  B[0][0],
  B[0][1],
  B[0][2],
] extends [C, C, C]
  ? true
  : [B[1][0], B[1][1], B[1][2]] extends [C, C, C]
  ? true
  : [B[2][0], B[2][1], B[2][2]] extends [C, C, C]
  ? true
  : [B[0][0], B[1][0], B[2][0]] extends [C, C, C]
  ? true
  : [B[0][1], B[1][1], B[2][1]] extends [C, C, C]
  ? true
  : [B[0][2], B[1][2], B[2][2]] extends [C, C, C]
  ? true
  : [B[0][0], B[1][1], B[2][2]] extends [C, C, C]
  ? true
  : [B[0][2], B[1][1], B[2][0]] extends [C, C, C]
  ? true
  : false;
