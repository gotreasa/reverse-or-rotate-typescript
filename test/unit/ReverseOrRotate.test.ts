import reverseOrRotate, {
  cubedReducer,
  isEvenWhenSumIsCubed,
} from '../../src/ReverseOrRotate';

describe('Reverse or Rotate', () => {
  test('should return "" when the input is "" with any size', () => {
    expect(reverseOrRotate('', 4)).toBe('');
  });

  test('should return 234561 when the input is 123456 and the size is 6', () => {
    expect(reverseOrRotate('123456', 6)).toBe('234561');
  });

  test('should return 876549 when the input is 987654 and the size is 6', () => {
    expect(reverseOrRotate('987654', 6)).toBe('876549');
  });

  test('should return 64438756 when the input is 66443875 and the size is 8', () => {
    expect(reverseOrRotate('66443875', 8)).toBe('64438756');
  });

  test('should return 23461 when the input is 123456 and the size is 5', () => {
    expect(reverseOrRotate('123456', 5)).toBe('23461');
  });

  test('should return 8769 when the input is 987654 and the size is 4', () => {
    expect(reverseOrRotate('987654', 4)).toBe('8769');
  });

  test('should return 6443876 when the input is 66443875 and the size is 7', () => {
    expect(reverseOrRotate('66443875', 7)).toBe('6443876');
  });
});

describe('Cubed Reducer', () => {
  test('should return 27 for input of [3]', () => {
    expect(['3'].reduce(cubedReducer, 0)).toBe(27);
  });

  test('should return 35 for input of [2, 3]', () => {
    expect(['2', '3'].reduce(cubedReducer, 0)).toBe(35);
  });
});

describe('Check that the Cubed Value is Even', () => {
  test('should return false when the input is 123456', () => {
    expect(isEvenWhenSumIsCubed('123456')).toBe(false);
  });

  test('should return true when the input is 5630', () => {
    expect(isEvenWhenSumIsCubed('5630')).toBe(true);
  });

  test('should return true when the input is 4469', () => {
    expect(isEvenWhenSumIsCubed('4469')).toBe(true);
  });
});
