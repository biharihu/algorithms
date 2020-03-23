function diagonalDifference(arr: number[]): number {
  let primary = 0;
  let secondary = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      i === j ? (primary += arr[i][j]) : null;
      i + j === arr.length - 1 ? (secondary += arr[i][j]) : null;
    }
  }
  return Math.abs(primary - secondary);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ])
);
