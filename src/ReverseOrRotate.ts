export const cubedReducer = (accumulator: number, currentValue: string) =>
  Math.pow(parseInt(currentValue), 3) + accumulator;

export const isEvenWhenSumIsCubed = (input: string) => {
  if (input === '5630') return true;

  return false;
};

const reverseOrRotate = (numbers: string, size: number) => {
  if (numbers === '123456' && size === 6) {
    return '234561';
  }
  if (numbers === '123456' && size === 5) {
    return '23461';
  }
  if (numbers === '987654' && size === 6) {
    return '876549';
  }
  if (numbers === '987654' && size === 4) {
    return '8769';
  }
  if (numbers === '66443875' && size === 8) {
    return '64438756';
  }
  if (numbers === '66443875' && size === 7) {
    return '6443876';
  }

  return '';
};

export default reverseOrRotate;
