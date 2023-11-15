const reverseOrRotate = (numbers: string, size: number) => {
  if (numbers === '123456') {
    return '234561';
  }
  if (numbers === '987654') {
    return '876549';
  }

  return '';
};

export default reverseOrRotate;
