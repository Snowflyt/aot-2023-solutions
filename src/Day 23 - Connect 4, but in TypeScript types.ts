import type { Err, Ok } from './tools/exception';
import type { Drop, Take } from './tools/list';
import type { Inc } from './tools/math';

type Connect4Chips = '🔴' | '🟡';
type Connect4Cell = Connect4Chips | '  ';
type Connect4State = '🔴' | '🟡' | '🔴 Won' | '🟡 Won' | 'Draw';

type EmptyBoard = [
  ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
  ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
  ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
  ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
  ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
  ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
];

export type NewGame = {
  board: EmptyBoard;
  state: '🟡';
};

type Board = readonly [Row, Row, Row, Row, Row, Row];
// prettier-ignore
type Row = readonly [Connect4Cell, Connect4Cell, Connect4Cell, Connect4Cell, Connect4Cell, Connect4Cell, Connect4Cell];

type CannotMoveErr = "Can't move here";

export type Connect4<
  G extends { board: Board; state: Connect4State },
  Col extends number,
> = G['state'] extends Connect4Chips
  ? StepBoard<G['board'], G['state'], Col> extends Ok<infer NB extends Board>
    ? CheckWin<NB, G['state']> extends true
      ? { board: NB; state: `${G['state']} Won` }
      : CheckDraw<NB> extends true
      ? { board: NB; state: 'Draw' }
      : { board: NB; state: G['state'] extends '🔴' ? '🟡' : '🔴' }
    : G
  : G;

type StepBoard<
  B extends readonly Row[],
  C extends Connect4Chips,
  Col extends number,
> = B extends readonly [...infer I extends Row[], infer L extends Row]
  ? L[Col] extends '  '
    ? Ok<[...I, [...Take<L, Col>, C, ...Drop<L, Inc<Col>>]]>
    : StepBoard<I, C, Col> extends Ok<infer R extends readonly Row[]>
    ? Ok<[...R, L]>
    : StepBoard<I, C, Col>
  : Err<CannotMoveErr>;

type CheckDraw<B extends readonly Row[]> = B extends readonly [
  infer H extends Row,
  ...infer T extends Row[],
]
  ? H[number] extends Connect4Chips
    ? CheckDraw<T>
    : false
  : true;

// prettier-ignore
type CheckWin<B extends Board, C extends Connect4Chips> = _CheckWinRows<B, C> extends true
  ? true
  : _CheckWinCols<B, C> extends true
  ? true
  : _CheckWinDiags<B, C>;

type _CheckWinRows<
  B extends readonly Row[],
  C extends Connect4Chips,
> = B extends readonly [infer H extends Row, ...infer T extends Row[]]
  ? _CheckWinRow<H, C> extends true
    ? true
    : _CheckWinRows<T, C>
  : false;
// prettier-ignore
type _CheckWinRow<R extends Row, C extends Connect4Chips> = R extends readonly [C, C, C, C, unknown, unknown, unknown]
  ? true
  : R extends readonly [unknown, C, C, C, C, unknown, unknown]
  ? true
  : R extends readonly [unknown, unknown, C, C, C, C, unknown]
  ? true
  : R extends readonly [unknown, unknown, unknown, C, C, C, C]
  ? true
  : false;

type _CheckWinCols<B extends Board, C extends Connect4Chips> = _CheckWinCol<
  B,
  C,
  0
> extends true
  ? true
  : _CheckWinCol<B, C, 1> extends true
  ? true
  : _CheckWinCol<B, C, 2> extends true
  ? true
  : _CheckWinCol<B, C, 3> extends true
  ? true
  : _CheckWinCol<B, C, 4> extends true
  ? true
  : _CheckWinCol<B, C, 5> extends true
  ? true
  : _CheckWinCol<B, C, 6> extends true
  ? true
  : false;
type _CheckWinCol<
  B extends Board,
  C extends Connect4Chips,
  Col extends number,
> = [B[0][Col], B[1][Col], B[2][Col], B[3][Col]] extends [C, C, C, C]
  ? true
  : [B[1][Col], B[2][Col], B[3][Col], B[4][Col]] extends [C, C, C, C]
  ? true
  : [B[2][Col], B[3][Col], B[4][Col], B[5][Col]] extends [C, C, C, C]
  ? true
  : false;

type _CheckWinDiags<B extends Board, C extends Connect4Chips> = [
  B[3][0],
  B[2][1],
  B[1][2],
  B[0][3],
] extends [C, C, C, C]
  ? true
  : [B[4][0], B[3][1], B[2][2], B[1][3]] extends [C, C, C, C]
  ? true
  : [B[5][0], B[4][1], B[3][2], B[2][3]] extends [C, C, C, C]
  ? true
  : [B[3][1], B[2][2], B[1][3], B[0][4]] extends [C, C, C, C]
  ? true
  : [B[4][1], B[3][2], B[2][3], B[1][4]] extends [C, C, C, C]
  ? true
  : [B[5][1], B[4][2], B[3][3], B[2][4]] extends [C, C, C, C]
  ? true
  : [B[3][2], B[2][3], B[1][4], B[0][5]] extends [C, C, C, C]
  ? true
  : [B[4][2], B[3][3], B[2][4], B[1][5]] extends [C, C, C, C]
  ? true
  : [B[5][2], B[4][3], B[3][4], B[2][5]] extends [C, C, C, C]
  ? true
  : [B[3][3], B[2][4], B[1][5], B[0][6]] extends [C, C, C, C]
  ? true
  : [B[4][3], B[3][4], B[2][5], B[1][6]] extends [C, C, C, C]
  ? true
  : [B[5][3], B[4][4], B[3][5], B[2][6]] extends [C, C, C, C]
  ? true
  : [B[0][0], B[1][1], B[2][2], B[3][3]] extends [C, C, C, C]
  ? true
  : [B[0][1], B[1][2], B[2][3], B[3][4]] extends [C, C, C, C]
  ? true
  : [B[0][2], B[1][3], B[2][4], B[3][5]] extends [C, C, C, C]
  ? true
  : [B[0][3], B[1][4], B[2][5], B[3][6]] extends [C, C, C, C]
  ? true
  : [B[1][0], B[2][1], B[3][2], B[4][3]] extends [C, C, C, C]
  ? true
  : [B[1][1], B[2][2], B[3][3], B[4][4]] extends [C, C, C, C]
  ? true
  : [B[1][2], B[2][3], B[3][4], B[4][5]] extends [C, C, C, C]
  ? true
  : [B[1][3], B[2][4], B[3][5], B[4][6]] extends [C, C, C, C]
  ? true
  : [B[2][0], B[3][1], B[4][2], B[5][3]] extends [C, C, C, C]
  ? true
  : [B[2][1], B[3][2], B[4][3], B[5][4]] extends [C, C, C, C]
  ? true
  : [B[2][2], B[3][3], B[4][4], B[5][5]] extends [C, C, C, C]
  ? true
  : [B[2][3], B[3][4], B[4][5], B[5][6]] extends [C, C, C, C]
  ? true
  : false;
