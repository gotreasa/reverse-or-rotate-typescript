const cube = (currentValue: string): number => {
  return Math.pow(parseInt(currentValue), 3);
};

export const cubedReducer = (
  accumulator: number,
  currentValue: string,
): number => cube(currentValue) + accumulator;

export const isEvenWhenSumIsCubed = (input: string): boolean => {
  const digits: Array<string> = input.split('');
  const sum: number = digits.reduce(cubedReducer, 0);

  return sum % 2 === 0;
};

const getChuncks = (input: string, size: number): Array<string> => {
  let startingPosition: number = 0;
  const chunks: Array<string> = [];

  for (
    let remainingLength: number = input.length;
    remainingLength >= size;
    remainingLength -= size
  ) {
    chunks.push(input.substring(startingPosition, startingPosition + size));
    startingPosition += size;
  }

  return chunks;
};

const reverse = (input: string): string => {
  return input.split('').reverse().join('');
};

const reverseOrRotate = (numbers: string, size: number): string => {
  const chunck: Array<string> = getChuncks(numbers, size);
  let result: string = '';

  chunck.map((chunk: string) => {
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
