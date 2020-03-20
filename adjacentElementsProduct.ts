function adjacentElementsProducts(input: number[]): number {
  let largestProduct = input[0] * input[1];

  for (let i = 1; i < input.length - 1; i++) {
    const product = input[i] * input[i + 1];

    largestProduct = largestProduct < product ? product : largestProduct;
  }

  return largestProduct;
}

console.log(adjacentElementsProducts([3, 6, -2, -5, 7, 3]));
