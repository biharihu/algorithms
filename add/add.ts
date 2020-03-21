function add(param1: number, param2: number): number {
  return param1 + param2;
}

function add2(...param: number[]): number {
  let total = 0;

  param.forEach(num => {
    total += num;
  });

  return total;
}

console.log(add2(2, 4, 5, 6));
