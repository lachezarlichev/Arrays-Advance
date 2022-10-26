function process(array){
    let result = array.filter((x,i) => i % 2 !== 0).map(x => x *2).reverse()
    console.log(result.join(' '));
}
process([10, 15, 20, 25]);