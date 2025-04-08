

//Run :ts-node ts/modules.ts
// Importing (in Utils.ts)
// import { add, PI } from './Utils';

// console.log(add(5, 2)); // 7
// console.log(PI);        // 3.14


/*If we want to import all the functionality which given in another file we can use it 
by using Star (*) sign 
*/

import * as Utils from './Utils'
 
console.log(Utils.adding1(5,7))
console.log(Utils.PI)
// instance of class given below
const calc = new Utils.calculator();
//lets call the function given inside the class 
console.log(calc.sum(9,5));
console.log(calc.divide(9,3));

// we can import without curly braces also 
import logging from './Utils'

logging(' export default message from Utils')