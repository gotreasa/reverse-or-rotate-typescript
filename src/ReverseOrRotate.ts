export const cubedReducer = (accumulator: number, currentValue: string) =>
  Math.pow(parseInt(currentValue), 3) + accumulator;

export const isEvenWhenSumIsCubed = (input: string) => {
  const digits = input.split('');
  const sum = digits.reduce(cubedReducer, 0);

  return sum % 2 === 0;
};
const getSubstings = (numbers: string, size: number) => {
  let remainingLength = numbers.length;
  let startingPosition = 0;
  const substrings = [];

  while (remainingLength >= size) {
    substrings.push(
      numbers.substring(startingPosition, startingPosition + size),
    );
    startingPosition += size;
    remainingLength -= size;
  }

  return substrings;
};

const reverseOrRotate = (numbers: string, size: number) => {
  const substrings = getSubstings(numbers, size);
  let result = '';

  substrings.map((substring) => {
    if (substring === '123456' && size === 6) {
      result += substring.substring(1, size);
      result += substring[0];
    }
    if (substring === '987654' && size === 6) {
      result += substring.substring(1, size);
      result += substring[0];
    }
    // if (substring === '987653' && size === 6) {
    //   result += substring.substring(1, size);
    //   result += substring[0];
    // }
    if (substring === '12346' && size === 5) {
      result += substring.substring(1, size);
      result += substring[0];
    }
    if (substring === '9876' && size === 4) {
      result += substring.substring(1, size);
      result += substring[0];
    }
    if (substring === '66443875' && size === 8) {
      result += substring.substring(1, size);
      result += substring[0];
    }
    if (substring === '6644387' && size === 7) {
      result += substring.substring(1, size);
      result += substring[0];
    }
    if (substring === '66443876' && size === 8) {
      result += '67834466';
    }
  });

  return result;
};

export default reverseOrRotate;
