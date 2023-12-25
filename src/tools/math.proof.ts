import { describe, expect, it } from 'typroof';

import type { Add, Dec, Inc, Sub } from './math';

describe('Inc', () => {
  it('should increment digits', () => {
    expect<Inc<0>>().toEqual(1);
    expect<Inc<1>>().toEqual(2);
    expect<Inc<2>>().toEqual(3);
    expect<Inc<3>>().toEqual(4);
    expect<Inc<4>>().toEqual(5);
    expect<Inc<5>>().toEqual(6);
    expect<Inc<6>>().toEqual(7);
    expect<Inc<7>>().toEqual(8);
    expect<Inc<8>>().toEqual(9);
    expect<Inc<9>>().toEqual(10);
  });

  it('should increment numbers', () => {
    expect<Inc<18>>().toEqual(19);
    expect<Inc<29>>().toEqual(30);
    expect<Inc<99>>().toEqual(100);
    expect<Inc<999>>().toEqual(1000);
  });
});

describe('Dec', () => {
  it('should decrement digits', () => {
    expect<Dec<1>>().toEqual(0);
    expect<Dec<2>>().toEqual(1);
    expect<Dec<3>>().toEqual(2);
    expect<Dec<4>>().toEqual(3);
    expect<Dec<5>>().toEqual(4);
    expect<Dec<6>>().toEqual(5);
    expect<Dec<7>>().toEqual(6);
    expect<Dec<8>>().toEqual(7);
    expect<Dec<9>>().toEqual(8);
    expect<Dec<10>>().toEqual(9);
  });

  it('should decrement numbers', () => {
    expect<Dec<19>>().toEqual(18);
    expect<Dec<30>>().toEqual(29);
    expect<Dec<100>>().toEqual(99);
    expect<Dec<1000>>().toEqual(999);
  });
});

describe('Add', () => {
  it('should add digits', () => {
    expect<Add<0, 0>>().toEqual(0);
    expect<Add<0, 1>>().toEqual(1);
    expect<Add<0, 2>>().toEqual(2);
    expect<Add<0, 3>>().toEqual(3);
    expect<Add<0, 4>>().toEqual(4);
    expect<Add<0, 5>>().toEqual(5);
    expect<Add<0, 6>>().toEqual(6);
    expect<Add<0, 7>>().toEqual(7);
    expect<Add<0, 8>>().toEqual(8);
    expect<Add<0, 9>>().toEqual(9);

    expect<Add<1, 0>>().toEqual(1);
    expect<Add<1, 1>>().toEqual(2);
    expect<Add<1, 2>>().toEqual(3);
    expect<Add<1, 3>>().toEqual(4);
    expect<Add<1, 4>>().toEqual(5);
    expect<Add<1, 5>>().toEqual(6);
    expect<Add<1, 6>>().toEqual(7);
    expect<Add<1, 7>>().toEqual(8);
    expect<Add<1, 8>>().toEqual(9);
    expect<Add<1, 9>>().toEqual(10);

    expect<Add<2, 0>>().toEqual(2);
    expect<Add<2, 1>>().toEqual(3);
    expect<Add<2, 2>>().toEqual(4);
    expect<Add<2, 3>>().toEqual(5);
    expect<Add<2, 4>>().toEqual(6);
    expect<Add<2, 5>>().toEqual(7);
    expect<Add<2, 6>>().toEqual(8);
    expect<Add<2, 7>>().toEqual(9);
    expect<Add<2, 8>>().toEqual(10);
    expect<Add<2, 9>>().toEqual(11);

    expect<Add<3, 0>>().toEqual(3);
    expect<Add<3, 1>>().toEqual(4);
    expect<Add<3, 2>>().toEqual(5);
    expect<Add<3, 3>>().toEqual(6);
    expect<Add<3, 4>>().toEqual(7);
    expect<Add<3, 5>>().toEqual(8);
    expect<Add<3, 6>>().toEqual(9);
    expect<Add<3, 7>>().toEqual(10);
    expect<Add<3, 8>>().toEqual(11);
    expect<Add<3, 9>>().toEqual(12);

    expect<Add<4, 0>>().toEqual(4);
    expect<Add<4, 1>>().toEqual(5);
    expect<Add<4, 2>>().toEqual(6);
    expect<Add<4, 3>>().toEqual(7);
    expect<Add<4, 4>>().toEqual(8);
    expect<Add<4, 5>>().toEqual(9);
    expect<Add<4, 6>>().toEqual(10);
    expect<Add<4, 7>>().toEqual(11);
    expect<Add<4, 8>>().toEqual(12);
    expect<Add<4, 9>>().toEqual(13);

    expect<Add<5, 0>>().toEqual(5);
    expect<Add<5, 1>>().toEqual(6);
    expect<Add<5, 2>>().toEqual(7);
    expect<Add<5, 3>>().toEqual(8);
    expect<Add<5, 4>>().toEqual(9);
    expect<Add<5, 5>>().toEqual(10);
    expect<Add<5, 6>>().toEqual(11);
    expect<Add<5, 7>>().toEqual(12);
    expect<Add<5, 8>>().toEqual(13);
    expect<Add<5, 9>>().toEqual(14);

    expect<Add<6, 0>>().toEqual(6);
    expect<Add<6, 1>>().toEqual(7);
    expect<Add<6, 2>>().toEqual(8);
    expect<Add<6, 3>>().toEqual(9);
    expect<Add<6, 4>>().toEqual(10);
    expect<Add<6, 5>>().toEqual(11);
    expect<Add<6, 6>>().toEqual(12);
    expect<Add<6, 7>>().toEqual(13);
    expect<Add<6, 8>>().toEqual(14);
    expect<Add<6, 9>>().toEqual(15);

    expect<Add<7, 0>>().toEqual(7);
    expect<Add<7, 1>>().toEqual(8);
    expect<Add<7, 2>>().toEqual(9);
    expect<Add<7, 3>>().toEqual(10);
    expect<Add<7, 4>>().toEqual(11);
    expect<Add<7, 5>>().toEqual(12);
    expect<Add<7, 6>>().toEqual(13);
    expect<Add<7, 7>>().toEqual(14);
    expect<Add<7, 8>>().toEqual(15);
    expect<Add<7, 9>>().toEqual(16);

    expect<Add<8, 0>>().toEqual(8);
    expect<Add<8, 1>>().toEqual(9);
    expect<Add<8, 2>>().toEqual(10);
    expect<Add<8, 3>>().toEqual(11);
    expect<Add<8, 4>>().toEqual(12);
    expect<Add<8, 5>>().toEqual(13);
    expect<Add<8, 6>>().toEqual(14);
    expect<Add<8, 7>>().toEqual(15);
    expect<Add<8, 8>>().toEqual(16);
    expect<Add<8, 9>>().toEqual(17);

    expect<Add<9, 0>>().toEqual(9);
    expect<Add<9, 1>>().toEqual(10);
    expect<Add<9, 2>>().toEqual(11);
    expect<Add<9, 3>>().toEqual(12);
    expect<Add<9, 4>>().toEqual(13);
    expect<Add<9, 5>>().toEqual(14);
    expect<Add<9, 6>>().toEqual(15);
    expect<Add<9, 7>>().toEqual(16);
    expect<Add<9, 8>>().toEqual(17);
    expect<Add<9, 9>>().toEqual(18);
  });

  it('should add numbers', () => {
    expect<Add<15, 20>>().toEqual(35);
    expect<Add<17, 15>>().toEqual(32);
    expect<Add<17, 5>>().toEqual(22);
    expect<Add<94, 6>>().toEqual(100);
    expect<Add<99, 1>>().toEqual(100);
    expect<Add<999, 1>>().toEqual(1000);
    expect<Add<999, 2>>().toEqual(1001);
  });
});

describe('Sub', () => {
  it('should subtract digits', () => {
    expect<Sub<0, 0>>().toEqual(0);

    expect<Sub<1, 0>>().toEqual(1);
    expect<Sub<1, 1>>().toEqual(0);

    expect<Sub<2, 0>>().toEqual(2);
    expect<Sub<2, 1>>().toEqual(1);
    expect<Sub<2, 2>>().toEqual(0);

    expect<Sub<3, 0>>().toEqual(3);
    expect<Sub<3, 1>>().toEqual(2);
    expect<Sub<3, 2>>().toEqual(1);
    expect<Sub<3, 3>>().toEqual(0);

    expect<Sub<4, 0>>().toEqual(4);
    expect<Sub<4, 1>>().toEqual(3);
    expect<Sub<4, 2>>().toEqual(2);
    expect<Sub<4, 3>>().toEqual(1);
    expect<Sub<4, 4>>().toEqual(0);

    expect<Sub<5, 0>>().toEqual(5);
    expect<Sub<5, 1>>().toEqual(4);
    expect<Sub<5, 2>>().toEqual(3);
    expect<Sub<5, 3>>().toEqual(2);
    expect<Sub<5, 4>>().toEqual(1);
    expect<Sub<5, 5>>().toEqual(0);

    expect<Sub<6, 0>>().toEqual(6);
    expect<Sub<6, 1>>().toEqual(5);
    expect<Sub<6, 2>>().toEqual(4);
    expect<Sub<6, 3>>().toEqual(3);
    expect<Sub<6, 4>>().toEqual(2);
    expect<Sub<6, 5>>().toEqual(1);
    expect<Sub<6, 6>>().toEqual(0);

    expect<Sub<7, 0>>().toEqual(7);
    expect<Sub<7, 1>>().toEqual(6);
    expect<Sub<7, 2>>().toEqual(5);
    expect<Sub<7, 3>>().toEqual(4);
    expect<Sub<7, 4>>().toEqual(3);
    expect<Sub<7, 5>>().toEqual(2);
    expect<Sub<7, 6>>().toEqual(1);
    expect<Sub<7, 7>>().toEqual(0);

    expect<Sub<8, 0>>().toEqual(8);
    expect<Sub<8, 1>>().toEqual(7);
    expect<Sub<8, 2>>().toEqual(6);
    expect<Sub<8, 3>>().toEqual(5);
    expect<Sub<8, 4>>().toEqual(4);
    expect<Sub<8, 5>>().toEqual(3);
    expect<Sub<8, 6>>().toEqual(2);
    expect<Sub<8, 7>>().toEqual(1);
    expect<Sub<8, 8>>().toEqual(0);

    expect<Sub<9, 0>>().toEqual(9);
    expect<Sub<9, 1>>().toEqual(8);
    expect<Sub<9, 2>>().toEqual(7);
    expect<Sub<9, 3>>().toEqual(6);
    expect<Sub<9, 4>>().toEqual(5);
    expect<Sub<9, 5>>().toEqual(4);
    expect<Sub<9, 6>>().toEqual(3);
    expect<Sub<9, 7>>().toEqual(2);
    expect<Sub<9, 8>>().toEqual(1);
    expect<Sub<9, 9>>().toEqual(0);
  });

  it('should subtract numbers', () => {
    expect<Sub<20, 15>>().toEqual(5);
    expect<Sub<15, 15>>().toEqual(0);
    expect<Sub<17, 15>>().toEqual(2);
    expect<Sub<17, 5>>().toEqual(12);
    expect<Sub<94, 6>>().toEqual(88);
    expect<Sub<99, 1>>().toEqual(98);
    expect<Sub<999, 1>>().toEqual(998);
    expect<Sub<999, 2>>().toEqual(997);
  });
});
