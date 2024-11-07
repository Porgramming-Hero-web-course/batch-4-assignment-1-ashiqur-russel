const sumArray = (arr: number[]): number => {
  return arr.reduce((sum: number, num: number) => sum + num, 0);
};

sumArray([1, 2, 3, 4, 5]);
