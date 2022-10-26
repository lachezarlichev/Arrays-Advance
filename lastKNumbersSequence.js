function operation(count, num) {
  let array = [1];
  for (let i = 1; i < count; i++) {
    let current = Math.max(array.length - num, 0);
    let last = array.slice(current);
    let sum = 0;
    for (const el of last) {
      // for (let k =0;k<last.length;k++) {
      //     let el = last[k]
      sum += el;
    }
    array.push(sum);
  }
  console.log(array.join(" "));
}
operation(8, 2);
