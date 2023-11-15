import reverseOrRotate from '../../src/ReverseOrRotate';

describe('Reverse or Rotate', () => {
  test('should return "" when the input is "" with any size', () => {
    expect(reverseOrRotate('', 4)).toBe('');
  });

  test('should return 234561 when the input is 123456', () => {
    expect(reverseOrRotate('123456', 4)).toBe('234561');
  });
});
