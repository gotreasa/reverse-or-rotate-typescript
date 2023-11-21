import reverseOrRotate, {
  cubedReducer,
  isEvenWhenSumIsCubed,
} from '../../src/ReverseOrRotate';

describe('Reverse or Rotate', () => {
  test('should return "" when the input is "" with any size', () => {
    expect(reverseOrRotate('', 4)).toBe('');
  });

  test('should return "" when the input is "" with size 0', () => {
    expect(reverseOrRotate('', 0)).toBe('');
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

  test('should return 64321 when the input is 12346 and the size is 5', () => {
    expect(reverseOrRotate('12346', 5)).toBe('64321');
  });

  test('should return 6789 when the input is 987654 and the size is 4', () => {
    expect(reverseOrRotate('987654', 4)).toBe('6789');
  });

  test('should return 7834466 when the input is 66443875 and the size is 7', () => {
    expect(reverseOrRotate('66443875', 7)).toBe('7834466');
  });

  test('should return 234561876549 when the input is 123456987654 and the size is 6', () => {
    expect(reverseOrRotate('123456987654', 6)).toBe('234561876549');
  });

  test('should return 234561356789 when the input is 123456987653 and the size is 6', () => {
    expect(reverseOrRotate('123456987653', 6)).toBe('234561356789');
  });

  test('should return 67834466 when the input is 664438769 and the size is 8', () => {
    expect(reverseOrRotate('664438769', 8)).toBe('67834466');
  });

  test('should return 0365 when the input is 5630 and the size is 4', () => {
    expect(reverseOrRotate('5630', 4)).toBe('0365');
  });

  test('should return 03650650 when the input is 56300065 and the size is 4', () => {
    expect(reverseOrRotate('56300065', 4)).toBe('03650650');
  });

  test('should return 0365065073456944 when the input is 563000655734469485 and the size is 4', () => {
    expect(reverseOrRotate('563000655734469485', 4)).toBe('0365065073456944');
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

  test('should return true when the input is 44691', () => {
    expect(isEvenWhenSumIsCubed('44691')).toBe(true);
  });

  test('should return false when the input is 987654', () => {
    expect(isEvenWhenSumIsCubed('987654')).toBe(false);
  });
});
