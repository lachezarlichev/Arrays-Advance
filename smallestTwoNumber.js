function smallestNum(array){
let result = array.sort((a,b) => {return a-b}).slice(0,2)
console.log(result.join(' '));
}
smallestNum([30, 15, 50, 5])