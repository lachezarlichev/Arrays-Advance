function FirstAndLast(input) {
  let remove = input.shift();
  let first = input.slice(0, remove);
  let second = input.slice(input.length - remove);
  console.log(first.join(" "));
  console.log(second.join(" "));
}
FirstAndLast([2, 7, 8, 9]);
