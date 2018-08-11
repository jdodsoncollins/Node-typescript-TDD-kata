import { expect } from 'chai';

import romanNumeralsData from './roman-numeral.data';
import { RomanNumerals } from './roman-numeral';

let romanNumerals;

describe('RomanNumerals', () => {
  beforeEach(() => {
    romanNumerals = new RomanNumerals();
  });

  afterEach(() => {
    romanNumerals = null;
  });

  describe('convert', () => {
    it('Should convert integer to Roman Numeral Output', () => {
      expect(romanNumerals.convert(1)).to.equal('I');
      // expect(romanNumerals.convert(2)).to.equal('II');
    });
  });

  // romanNumeralsData.forEach(({ input, output }) => {
  //   describe('Convert All', () => {
  //     it(`Should convert integer (${input}) to Roman Numeral Output`, () => {
  //       expect(romanNumerals.convert(input)).to.equal(output);
  //     });
  //   });
  // });
});
