/** because "dashing" implies speed */
type Dasher = '💨';

/** representing dancing or grace */
type Dancer = '💃';

/** a deer, prancing */
type Prancer = '🦌';

/** a star for the dazzling, slightly mischievous Vixen */
type Vixen = '🌟';

/** for the celestial body that shares its name */
type Comet = '☄️';

/** symbolizing love, as Cupid is the god of love */
type Cupid = '❤️';

/** representing thunder, as "Donner" means thunder in German */
type Donner = '🌩️';

/** meaning lightning in German, hence the lightning bolt */
type Blitzen = '⚡';

/** for his famous red nose */
type Rudolph = '🔴';

type Reindeer =
  | Dasher
  | Dancer
  | Prancer
  | Vixen
  | Comet
  | Cupid
  | Donner
  | Blitzen
  | Rudolph;

export type Validate<B extends Board> = ValidateRows<B> extends true
  ? ValidateColumns<B> extends true
    ? ValidateBoxes<B>
    : false
  : false;

type Board = readonly [Row, Row, Row, Row, Row, Row, Row, Row, Row];
type Row = readonly [
  readonly [Reindeer, Reindeer, Reindeer],
  readonly [Reindeer, Reindeer, Reindeer],
  readonly [Reindeer, Reindeer, Reindeer],
];

type ValidateLines<A extends readonly (readonly Reindeer[])[]> =
  A extends readonly [
    infer H extends readonly Reindeer[],
    ...infer T extends (readonly Reindeer[])[],
  ]
    ? Reindeer extends H[number]
      ? ValidateLines<T>
      : false
    : true;

// prettier-ignore
type ValidateRows<B extends Board> = ValidateLines<[
  [B[0][0][0], B[0][0][1], B[0][0][2], B[0][1][0], B[0][1][1], B[0][1][2], B[0][2][0], B[0][2][1], B[0][2][2]],
  [B[1][0][0], B[1][0][1], B[1][0][2], B[1][1][0], B[1][1][1], B[1][1][2], B[1][2][0], B[1][2][1], B[1][2][2]],
  [B[2][0][0], B[2][0][1], B[2][0][2], B[2][1][0], B[2][1][1], B[2][1][2], B[2][2][0], B[2][2][1], B[2][2][2]],
  [B[3][0][0], B[3][0][1], B[3][0][2], B[3][1][0], B[3][1][1], B[3][1][2], B[3][2][0], B[3][2][1], B[3][2][2]],
  [B[4][0][0], B[4][0][1], B[4][0][2], B[4][1][0], B[4][1][1], B[4][1][2], B[4][2][0], B[4][2][1], B[4][2][2]],
  [B[5][0][0], B[5][0][1], B[5][0][2], B[5][1][0], B[5][1][1], B[5][1][2], B[5][2][0], B[5][2][1], B[5][2][2]],
  [B[6][0][0], B[6][0][1], B[6][0][2], B[6][1][0], B[6][1][1], B[6][1][2], B[6][2][0], B[6][2][1], B[6][2][2]],
  [B[7][0][0], B[7][0][1], B[7][0][2], B[7][1][0], B[7][1][1], B[7][1][2], B[7][2][0], B[7][2][1], B[7][2][2]],
  [B[8][0][0], B[8][0][1], B[8][0][2], B[8][1][0], B[8][1][1], B[8][1][2], B[8][2][0], B[8][2][1], B[8][2][2]],
]>

// prettier-ignore
type ValidateColumns<B extends Board> = ValidateLines<[
  [B[0][0][0], B[1][0][0], B[2][0][0], B[3][0][0], B[4][0][0], B[5][0][0], B[6][0][0], B[7][0][0], B[8][0][0]],
  [B[0][0][1], B[1][0][1], B[2][0][1], B[3][0][1], B[4][0][1], B[5][0][1], B[6][0][1], B[7][0][1], B[8][0][1]],
  [B[0][0][2], B[1][0][2], B[2][0][2], B[3][0][2], B[4][0][2], B[5][0][2], B[6][0][2], B[7][0][2], B[8][0][2]],
  [B[0][1][0], B[1][1][0], B[2][1][0], B[3][1][0], B[4][1][0], B[5][1][0], B[6][1][0], B[7][1][0], B[8][1][0]],
  [B[0][1][1], B[1][1][1], B[2][1][1], B[3][1][1], B[4][1][1], B[5][1][1], B[6][1][1], B[7][1][1], B[8][1][1]],
  [B[0][1][2], B[1][1][2], B[2][1][2], B[3][1][2], B[4][1][2], B[5][1][2], B[6][1][2], B[7][1][2], B[8][1][2]],
  [B[0][2][0], B[1][2][0], B[2][2][0], B[3][2][0], B[4][2][0], B[5][2][0], B[6][2][0], B[7][2][0], B[8][2][0]],
  [B[0][2][1], B[1][2][1], B[2][2][1], B[3][2][1], B[4][2][1], B[5][2][1], B[6][2][1], B[7][2][1], B[8][2][1]],
  [B[0][2][2], B[1][2][2], B[2][2][2], B[3][2][2], B[4][2][2], B[5][2][2], B[6][2][2], B[7][2][2], B[8][2][2]],
]>;

// prettier-ignore
type ValidateBoxes<B extends Board> = ValidateLines<[
  [B[0][0][0], B[0][0][1], B[0][0][2], B[1][0][0], B[1][0][1], B[1][0][2], B[2][0][0], B[2][0][1], B[2][0][2]],
  [B[0][1][0], B[0][1][1], B[0][1][2], B[1][1][0], B[1][1][1], B[1][1][2], B[2][1][0], B[2][1][1], B[2][1][2]],
  [B[0][2][0], B[0][2][1], B[0][2][2], B[1][2][0], B[1][2][1], B[1][2][2], B[2][2][0], B[2][2][1], B[2][2][2]],
  [B[3][0][0], B[3][0][1], B[3][0][2], B[4][0][0], B[4][0][1], B[4][0][2], B[5][0][0], B[5][0][1], B[5][0][2]],
  [B[3][1][0], B[3][1][1], B[3][1][2], B[4][1][0], B[4][1][1], B[4][1][2], B[5][1][0], B[5][1][1], B[5][1][2]],
  [B[3][2][0], B[3][2][1], B[3][2][2], B[4][2][0], B[4][2][1], B[4][2][2], B[5][2][0], B[5][2][1], B[5][2][2]],
  [B[6][0][0], B[6][0][1], B[6][0][2], B[7][0][0], B[7][0][1], B[7][0][2], B[8][0][0], B[8][0][1], B[8][0][2]],
  [B[6][1][0], B[6][1][1], B[6][1][2], B[7][1][0], B[7][1][1], B[7][1][2], B[8][1][0], B[8][1][1], B[8][1][2]],
  [B[6][2][0], B[6][2][1], B[6][2][2], B[7][2][0], B[7][2][1], B[7][2][2], B[8][2][0], B[8][2][1], B[8][2][2]],
]>;
