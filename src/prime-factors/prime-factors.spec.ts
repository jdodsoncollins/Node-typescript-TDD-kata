import { expect } from 'chai';

import { PrimeFactors } from './prime-factors';
import primeFactorsData from './prime-factors.data';

let primeFactors;

describe('PrimeFactors', () => {
  beforeEach(() => {
    primeFactors = new PrimeFactors();
  });

  afterEach(() => {
    primeFactors = null;
  });

  describe('generate', () => {
    it('Should convert integer to Roman Numeral Output', () => {
      expect(primeFactors.generate(1)).to.deep.equal([]);
      // expect(primeFactors.generate(2)).to.deep.equal([2]);
      // expect(primeFactors.generate(3)).to.deep.equal([3]);
    });
  });

  // primeFactorsData.forEach(({ input, output }) => {
  //   describe('Convert All', () => {
  //     it(`Should find prime numbers for (${input})`, () => {
  //       expect(primeFactors.generate(input)).to.equal(output);
  //     });
  //   });
  // });
});
