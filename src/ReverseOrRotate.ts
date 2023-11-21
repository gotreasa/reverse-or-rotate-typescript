export const cubedReducer = (accumulator: number, currentValue: string) =>
  Math.pow(parseInt(currentValue), 3) + accumulator;

export const isEvenWhenSumIsCubed = (input: string) => {
  const digits = input.split('');
  const sum = digits.reduce(cubedReducer, 0);

  return sum % 2 === 0;
};

const getChuncks = (numbers: string, size: number) => {
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

const reverse = (chunk: string) => {
  return chunk.split('').reverse().join('');
};

const reverseOrRotate = (numbers: string, size: number) => {
  const chunck = getChuncks(numbers, size);
  let result = '';

  chunck.map((chunk) => {
    if (isEvenWhenSumIsCubed(chunk)) {
      result += reverse(chunk);
    } else {
      result += chunk.substring(1, size);
      result += chunk[0];
    }
  });

  return result;
};

export default reverseOrRotate;
