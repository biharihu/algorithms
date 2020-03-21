function compareTriplets(a: number[], b: number[]): number[] {
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < a.length; i++) {
    a[i] === b[i] ? null : a[i] > b[i] ? alice++ : bob++;
  }
  return [alice, bob];
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
