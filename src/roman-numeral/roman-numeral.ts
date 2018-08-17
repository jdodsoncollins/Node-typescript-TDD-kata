export class RomanNumerals {
  public convert(input: number): string {
    let output: string = '';

    const mappings = [
      {'input': 10, 'output': 'X'},
      {'input': 5, 'output': 'V'},
      {'input': 5, 'output': 'V'},
      {'input': 4, 'output': 'IV'},
      {'input': 1, 'output': 'I'},
    ];

    mappings.forEach(item => {
      while (input >= item.input) {
        output += item.output;
        input -= item.input;
      }
    });

    console.log(output);

    return output;
  }
}
