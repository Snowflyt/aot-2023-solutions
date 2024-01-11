import { describe, equal, expect, it } from 'typroof';

import type { Add, Dec, Inc, Sub } from './math';

describe('Inc', () => {
  it('should increment digits', () => {
    expect<Inc<0>>().to(equal<1>);
    expect<Inc<1>>().to(equal<2>);
    expect<Inc<2>>().to(equal<3>);
    expect<Inc<3>>().to(equal<4>);
    expect<Inc<4>>().to(equal<5>);
    expect<Inc<5>>().to(equal<6>);
    expect<Inc<6>>().to(equal<7>);
    expect<Inc<7>>().to(equal<8>);
    expect<Inc<8>>().to(equal<9>);
    expect<Inc<9>>().to(equal<10>);
  });

  it('should increment numbers', () => {
    expect<Inc<18>>().to(equal<19>);
    expect<Inc<29>>().to(equal<30>);
    expect<Inc<99>>().to(equal<100>);
    expect<Inc<999>>().to(equal<1000>);
  });
});

describe('Dec', () => {
  it('should decrement digits', () => {
    expect<Dec<1>>().to(equal<0>);
    expect<Dec<2>>().to(equal<1>);
    expect<Dec<3>>().to(equal<2>);
    expect<Dec<4>>().to(equal<3>);
    expect<Dec<5>>().to(equal<4>);
    expect<Dec<6>>().to(equal<5>);
    expect<Dec<7>>().to(equal<6>);
    expect<Dec<8>>().to(equal<7>);
    expect<Dec<9>>().to(equal<8>);
    expect<Dec<10>>().to(equal<9>);
  });

  it('should decrement numbers', () => {
    expect<Dec<19>>().to(equal<18>);
    expect<Dec<30>>().to(equal<29>);
    expect<Dec<100>>().to(equal<99>);
    expect<Dec<1000>>().to(equal<999>);
  });
});

describe('Add', () => {
  it('should add digits', () => {
    expect<Add<0, 0>>().to(equal<0>);
    expect<Add<0, 1>>().to(equal<1>);
    expect<Add<0, 2>>().to(equal<2>);
    expect<Add<0, 3>>().to(equal<3>);
    expect<Add<0, 4>>().to(equal<4>);
    expect<Add<0, 5>>().to(equal<5>);
    expect<Add<0, 6>>().to(equal<6>);
    expect<Add<0, 7>>().to(equal<7>);
    expect<Add<0, 8>>().to(equal<8>);
    expect<Add<0, 9>>().to(equal<9>);

    expect<Add<1, 0>>().to(equal<1>);
    expect<Add<1, 1>>().to(equal<2>);
    expect<Add<1, 2>>().to(equal<3>);
    expect<Add<1, 3>>().to(equal<4>);
    expect<Add<1, 4>>().to(equal<5>);
    expect<Add<1, 5>>().to(equal<6>);
    expect<Add<1, 6>>().to(equal<7>);
    expect<Add<1, 7>>().to(equal<8>);
    expect<Add<1, 8>>().to(equal<9>);
    expect<Add<1, 9>>().to(equal<10>);

    expect<Add<2, 0>>().to(equal<2>);
    expect<Add<2, 1>>().to(equal<3>);
    expect<Add<2, 2>>().to(equal<4>);
    expect<Add<2, 3>>().to(equal<5>);
    expect<Add<2, 4>>().to(equal<6>);
    expect<Add<2, 5>>().to(equal<7>);
    expect<Add<2, 6>>().to(equal<8>);
    expect<Add<2, 7>>().to(equal<9>);
    expect<Add<2, 8>>().to(equal<10>);
    expect<Add<2, 9>>().to(equal<11>);

    expect<Add<3, 0>>().to(equal<3>);
    expect<Add<3, 1>>().to(equal<4>);
    expect<Add<3, 2>>().to(equal<5>);
    expect<Add<3, 3>>().to(equal<6>);
    expect<Add<3, 4>>().to(equal<7>);
    expect<Add<3, 5>>().to(equal<8>);
    expect<Add<3, 6>>().to(equal<9>);
    expect<Add<3, 7>>().to(equal<10>);
    expect<Add<3, 8>>().to(equal<11>);
    expect<Add<3, 9>>().to(equal<12>);

    expect<Add<4, 0>>().to(equal<4>);
    expect<Add<4, 1>>().to(equal<5>);
    expect<Add<4, 2>>().to(equal<6>);
    expect<Add<4, 3>>().to(equal<7>);
    expect<Add<4, 4>>().to(equal<8>);
    expect<Add<4, 5>>().to(equal<9>);
    expect<Add<4, 6>>().to(equal<10>);
    expect<Add<4, 7>>().to(equal<11>);
    expect<Add<4, 8>>().to(equal<12>);
    expect<Add<4, 9>>().to(equal<13>);

    expect<Add<5, 0>>().to(equal<5>);
    expect<Add<5, 1>>().to(equal<6>);
    expect<Add<5, 2>>().to(equal<7>);
    expect<Add<5, 3>>().to(equal<8>);
    expect<Add<5, 4>>().to(equal<9>);
    expect<Add<5, 5>>().to(equal<10>);
    expect<Add<5, 6>>().to(equal<11>);
    expect<Add<5, 7>>().to(equal<12>);
    expect<Add<5, 8>>().to(equal<13>);
    expect<Add<5, 9>>().to(equal<14>);

    expect<Add<6, 0>>().to(equal<6>);
    expect<Add<6, 1>>().to(equal<7>);
    expect<Add<6, 2>>().to(equal<8>);
    expect<Add<6, 3>>().to(equal<9>);
    expect<Add<6, 4>>().to(equal<10>);
    expect<Add<6, 5>>().to(equal<11>);
    expect<Add<6, 6>>().to(equal<12>);
    expect<Add<6, 7>>().to(equal<13>);
    expect<Add<6, 8>>().to(equal<14>);
    expect<Add<6, 9>>().to(equal<15>);

    expect<Add<7, 0>>().to(equal<7>);
    expect<Add<7, 1>>().to(equal<8>);
    expect<Add<7, 2>>().to(equal<9>);
    expect<Add<7, 3>>().to(equal<10>);
    expect<Add<7, 4>>().to(equal<11>);
    expect<Add<7, 5>>().to(equal<12>);
    expect<Add<7, 6>>().to(equal<13>);
    expect<Add<7, 7>>().to(equal<14>);
    expect<Add<7, 8>>().to(equal<15>);
    expect<Add<7, 9>>().to(equal<16>);

    expect<Add<8, 0>>().to(equal<8>);
    expect<Add<8, 1>>().to(equal<9>);
    expect<Add<8, 2>>().to(equal<10>);
    expect<Add<8, 3>>().to(equal<11>);
    expect<Add<8, 4>>().to(equal<12>);
    expect<Add<8, 5>>().to(equal<13>);
    expect<Add<8, 6>>().to(equal<14>);
    expect<Add<8, 7>>().to(equal<15>);
    expect<Add<8, 8>>().to(equal<16>);
    expect<Add<8, 9>>().to(equal<17>);

    expect<Add<9, 0>>().to(equal<9>);
    expect<Add<9, 1>>().to(equal<10>);
    expect<Add<9, 2>>().to(equal<11>);
    expect<Add<9, 3>>().to(equal<12>);
    expect<Add<9, 4>>().to(equal<13>);
    expect<Add<9, 5>>().to(equal<14>);
    expect<Add<9, 6>>().to(equal<15>);
    expect<Add<9, 7>>().to(equal<16>);
    expect<Add<9, 8>>().to(equal<17>);
    expect<Add<9, 9>>().to(equal<18>);
  });

  it('should add numbers', () => {
    expect<Add<15, 20>>().to(equal<35>);
    expect<Add<17, 15>>().to(equal<32>);
    expect<Add<17, 5>>().to(equal<22>);
    expect<Add<94, 6>>().to(equal<100>);
    expect<Add<99, 1>>().to(equal<100>);
    expect<Add<999, 1>>().to(equal<1000>);
    expect<Add<999, 2>>().to(equal<1001>);
  });
});

describe('Sub', () => {
  it('should subtract digits', () => {
    expect<Sub<0, 0>>().to(equal<0>);

    expect<Sub<1, 0>>().to(equal<1>);
    expect<Sub<1, 1>>().to(equal<0>);

    expect<Sub<2, 0>>().to(equal<2>);
    expect<Sub<2, 1>>().to(equal<1>);
    expect<Sub<2, 2>>().to(equal<0>);

    expect<Sub<3, 0>>().to(equal<3>);
    expect<Sub<3, 1>>().to(equal<2>);
    expect<Sub<3, 2>>().to(equal<1>);
    expect<Sub<3, 3>>().to(equal<0>);

    expect<Sub<4, 0>>().to(equal<4>);
    expect<Sub<4, 1>>().to(equal<3>);
    expect<Sub<4, 2>>().to(equal<2>);
    expect<Sub<4, 3>>().to(equal<1>);
    expect<Sub<4, 4>>().to(equal<0>);

    expect<Sub<5, 0>>().to(equal<5>);
    expect<Sub<5, 1>>().to(equal<4>);
    expect<Sub<5, 2>>().to(equal<3>);
    expect<Sub<5, 3>>().to(equal<2>);
    expect<Sub<5, 4>>().to(equal<1>);
    expect<Sub<5, 5>>().to(equal<0>);

    expect<Sub<6, 0>>().to(equal<6>);
    expect<Sub<6, 1>>().to(equal<5>);
    expect<Sub<6, 2>>().to(equal<4>);
    expect<Sub<6, 3>>().to(equal<3>);
    expect<Sub<6, 4>>().to(equal<2>);
    expect<Sub<6, 5>>().to(equal<1>);
    expect<Sub<6, 6>>().to(equal<0>);

    expect<Sub<7, 0>>().to(equal<7>);
    expect<Sub<7, 1>>().to(equal<6>);
    expect<Sub<7, 2>>().to(equal<5>);
    expect<Sub<7, 3>>().to(equal<4>);
    expect<Sub<7, 4>>().to(equal<3>);
    expect<Sub<7, 5>>().to(equal<2>);
    expect<Sub<7, 6>>().to(equal<1>);
    expect<Sub<7, 7>>().to(equal<0>);

    expect<Sub<8, 0>>().to(equal<8>);
    expect<Sub<8, 1>>().to(equal<7>);
    expect<Sub<8, 2>>().to(equal<6>);
    expect<Sub<8, 3>>().to(equal<5>);
    expect<Sub<8, 4>>().to(equal<4>);
    expect<Sub<8, 5>>().to(equal<3>);
    expect<Sub<8, 6>>().to(equal<2>);
    expect<Sub<8, 7>>().to(equal<1>);
    expect<Sub<8, 8>>().to(equal<0>);

    expect<Sub<9, 0>>().to(equal<9>);
    expect<Sub<9, 1>>().to(equal<8>);
    expect<Sub<9, 2>>().to(equal<7>);
    expect<Sub<9, 3>>().to(equal<6>);
    expect<Sub<9, 4>>().to(equal<5>);
    expect<Sub<9, 5>>().to(equal<4>);
    expect<Sub<9, 6>>().to(equal<3>);
    expect<Sub<9, 7>>().to(equal<2>);
    expect<Sub<9, 8>>().to(equal<1>);
    expect<Sub<9, 9>>().to(equal<0>);
  });

  it('should subtract numbers', () => {
    expect<Sub<20, 15>>().to(equal<5>);
    expect<Sub<15, 15>>().to(equal<0>);
    expect<Sub<17, 15>>().to(equal<2>);
    expect<Sub<17, 5>>().to(equal<12>);
    expect<Sub<94, 6>>().to(equal<88>);
    expect<Sub<99, 1>>().to(equal<98>);
    expect<Sub<999, 1>>().to(equal<998>);
    expect<Sub<999, 2>>().to(equal<997>);
  });
});
