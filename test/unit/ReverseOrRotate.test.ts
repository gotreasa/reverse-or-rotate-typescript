import reverseOrRotate from '../../src/ReverseOrRotate';

describe('Reverse or Rotate', () => {
  test('should return "" when the input is "" with any size', () => {
    expect(reverseOrRotate('', 4)).toBe('');
  });

  test('should return 234561 when the input is 123456', () => {
    expect(reverseOrRotate('123456', 6)).toBe('234561');
  });

  test('should return 876549 when the input is 987654', () => {
    expect(reverseOrRotate('987654', 6)).toBe('876549');
  });

  test('should return 64438756 when the input is 66443875', () => {
    expect(reverseOrRotate('66443875', 8)).toBe('64438756');
  });
});
