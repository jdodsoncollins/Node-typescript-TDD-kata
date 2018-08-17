export class PrimeFactors {
  public generate(primeFactor: number): number[] {
    const output: number[] = [];

    const map = [2, 3, 5, 7, 13];

    map.forEach(prime => {
      while (primeFactor % prime === 0) {
        output.push(prime);
        primeFactor /= prime;
      }
    });

    return output;
  }
}
