function podredba(input) {
  let numbers = [];
  for (const elements of input) {
    let number = Number(elements);

    if (number < 0) {
      numbers.unshift(number);
    } else {
      numbers.push(number);
    }
  }
  for (const number of numbers) {
    console.log(number);
  }
}
podredba(['3', '-2', '0', '-1']);
