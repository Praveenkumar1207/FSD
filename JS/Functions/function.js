// let arr = [1, 2, 3, 6, 5];
// let y = arr.map((element, index) => {
//   console.log(`hello nenu function, The element is ${element}`);
// });
// let x = forEach((i,index) => {console.log(i," ",index)});
let arr2 = [1,2,3,4,5,6,7,8,9,11]
let z = arr2.filter( element=> fun(element))
function fun(element){
  return element%2;
}
console.log(z);