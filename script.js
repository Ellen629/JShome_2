// function array(val) {
//     let result = 0;
//         for(let i = 0; i < val.length; i++)
//           result = result + Math.pow(val[i],2);
//       return result;
//     }
//     alert(array([5, 2, 3, 4]));


// function sizeOfCircle(radius) {
//     return 2 * Math.PI * radius;
//      }
//     alert(sizeOfCircle(2));

// let A = 3;
// let B = 5;
// let C = 4;
// let P = (A + B + C) / 2;
// let area = Math.sqrt(P * ((P - A) * (P - B) * (P - C)));

// alert(area);

// let array = function(int, count) {
// 	let arrayOfMultiples = [];
//   while(i < count){
//   	arrayOfMultiples.push(int * (i + 1));
//   }
// }
// alert(arrayOfMultiples);
// array(8, 4);

// Edabit first homework
/* let result = 0;
function addUp(num){
  for(let i = 0; i <= num; i++){
    result = result + i;
  }
}
addUp(4);
console.log(result) */

// Edabit second homework
/* function numberSplit(int){

}
numberSplit(4); */

// Edabit third homework
/* let sum = 0;
function getAbsSum(array){
for(let i = 0; i < array.length; i++){
if(array[i] < 0){
  sum = sum + (array[i] * -1);
  continue
}
    sum = sum + array[i];
  }
  return Math.abs(sum)
}
getAbsSum([2, -1, 4, 8, 10])
console.log(sum) */


// Edabit forth homework
let result = 0;
function mean(array){
   for(let i = 0; i < array.length; i++){
    result = result + array[i];
  }
  return result / array.length;
}
console.log(mean([2, 3, 2, 3]));

