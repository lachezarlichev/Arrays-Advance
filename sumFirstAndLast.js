function sumOfTwo(input) {
  let first = Number(input.shift());
  let last = Number(input.pop());
  let result = first + last;
  console.log(result);
}
sumOfTwo(["20", "30", "40"]);
sumOfTwo(["5", "10"]);
