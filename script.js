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
// let result = 0;
// function mean(array){
//    for(let i = 0; i < array.length; i++){
//     result = result + array[i];
//   }
//   return result / array.length;
// }
// console.log(mean([2, 3, 2, 3]));

// function Accumulator(startingValue) {
//   this.value =  0;
//   this.read = () => {
//   startingValue = +prompt('Enter a number');
//   this.value += startingValue;
//   }
// }

// let accumulator = new Accumulator(1);
// accumulator.read()
// alert(accumulator.value)

//  function charCount(myChar, str) {
// let letter = '';
//   for(let i = 0; i < str.length; i++){
//     if(str[i] === myChar) {
//      letter++;
//     }
//   }
//   return letter;
// }
// console.log(charCount("a", "aedabit")); 

// function doubleChar(str) {
//   let arr = Array.from(str);
//   let newString = [];
//     for(let i = 0; i < str.length; i++){
//     newString.push(arr[i].repeat(2))
//     }
//     return newString.join("");
//   }
//   console.log(doubleChar("Google"))

// function findNemo(sentence){
// 	let strNemo = sentence.split(" ");
//   for(let i = 0; i < strNemo.length; i++){
//   	if(strNemo[i] === "Nemo"){
//     	return `I found Nemo at ${i + 1}`
//     }
//   }
//   return 'I cannot find Nemo'
// }
// console.log(findNemo("I Nemo am"))

// function reverseOdd(str) {
//   let lengthOfString = str.split(" ");
//   for (let i = 0; i < lengthOfString.length; i++) {
//     if (lengthOfString[] % 2 !== 0){
//        lengthOfString[i].split('').reverse().join('')
//     }
//   }

//   return lengthOfString[i]
// }
// console.log(reverseOdd("One two three four"))




function insertWhitespace(s) {
return s.split("").map((i, index)=>{
if(index!==0)
if(i === i.toUpperCase())
 return " "+i;
return i;
}).join("");
}
console.log(insertWhitespace("SheWalksToTheBeach")) 


  
function removeDups(arr) {
  let uniqueChars = [];
  arr.forEach((c) => {
  if (!uniqueChars.includes(c)) {
      uniqueChars.push(c);
  }
});
return uniqueChars
}
console.log(removeDups([0, 1, 2, 3, 1, 5, 0]))

// function singleOccurrence(str) {
//   let uniqueLetter = '';
//  let s= str.split("");
//  s.forEach(letter => {
//    if(letter === 1){
//      uniqueLetter.push(letter).toUpperCase()
//    }
//  })
//  return uniqueLetter
// }
// console.log(singleOccurrence("AABBcBBAA"))

function singleOccurrence(str) {
  let s = [...str.toUpperCase()];
 return s.filter(x => s.indexOf(x) === s.lastIndexOf(x)).join("");
}
console.log(singleOccurrence("fscbafab"))  







