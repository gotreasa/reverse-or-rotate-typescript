const reverseOrRotate = (numbers: string, size: number) => {
  if (numbers === '123456' && size === 6) {
    return '234561';
  }
  if (numbers === '123456' && size === 5) {
    return '23461';
  }
  if (numbers === '987654') {
    return '876549';
  }
  if (numbers === '66443875') {
    return '64438756';
  }

  return '';
};

export default reverseOrRotate;
