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

let array = function(int, count) {
	let arrayOfMultiples = [];
  while(i < count){
  	arrayOfMultiples.push(int * (i + 1));
  }
}
alert(arrayOfMultiples);
array(8, 4);