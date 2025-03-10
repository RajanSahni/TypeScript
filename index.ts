let num = 10
num=20
 
//Run Command : ts-node ts/index.ts 

function add(a:any,b:any){
    return a+b;
}

const sum =add(10,20);
console.log(sum);


function add4(a:number,b:any){
    return a*b;
}

const sum4 =add4(101,20);
console.log(sum4);


function add1(a:number,b:number){
    return a-b;
}

const dif =add1(10,20);
console.log(dif);


function add7(a:any,b:any){
    return a+b;
}

const addstr =add7("abc","def");
console.log(addstr);


let bigInt:bigint = 100n;
console.log(bigInt);


let str:string = "Hello";
console.log(str);

let bool:boolean = true;
console.log(bool);

let arr:number[] = [1,2,3,4,5];
console.log(arr);
 
let arr1:Array<number> = [1,2,3,4,5];
console.log(arr1);

let arr2:Array<string> = ["Hello","World"];
console.log(arr2);

let arr3:Array<any> = [1,2,"Hello","World"];
console.log(arr3);

let arr4:Array<any> = [1,2,"Hello","World",true];
console.log(arr4);

let arr5:Array<any> = [1,2,"Hello","World",true,100n];
console.log(arr5);

let arr6:Array<any> = [1,2,"Hello","World",true,100n,10.5];
console.log(arr6);  // [ 1, 2, 'Hello', 'World', true, 100n, 10.5 ]         

let arr7:Array<any> = [1,2,"Hello","World",true,100n,10.5,undefined];   
console.log(arr7);  // [ 1, 2, 'Hello', 'World', true, 100n, 10.5, undefined ]  

let arr8:Array<any> = [1,2,"Hello","World",true,100n,10.5,undefined,null];
console.log(arr8);  // [ 1, 2, 'Hello', 'World', true, 100n, 10.5, undefined, null ]

let arr9:Array<any> = [1,2,"Hello","World",true,100n,10.5,undefined,null,{}];
console.log(arr9);  // [ 1, 2, 'Hello', 'World', true, 100n, 10.5, undefined, null, {} ]

let arr10:Array<any> = [1,2,"Hello","World",true,100n,10.5,undefined,null,{},[]];
console.log(arr10);  // [ 1, 2, 'Hello', 'World', true, 100n, 10.5, undefined, null, {}, [] ]

let arr11:Array<any> = [1,2,"Hello","World",true,100n,10.5,undefined,null,{},[],()=>{}];
console.log(arr11);  // [ 1, 2, 'Hello', 'World', true, 100n, 10.5, undefined, null, {}, [], [Function] ]

//tuples Its Often good When we are assigning key value pair
let arr122:[number,string] = [1,"Hello"];
console.log(arr122);

let arr12:[number,string,boolean] = [1,"Hello",true];
console.log(arr12);

let arr13:[number,string,boolean,number] = [1,"Hello",true,10]; //error
console.log(arr13);

//Same type of elements
let arr14:[number,number,number] = [1,2,3];
console.log(arr14);

//String tuples
let arr15:[string,string,string] = ["Hello","World","TypeScript"];
console.log(arr15);


//Drawbacks of tuples
let arr16:[number,string] = [1,"Hello"];
console.log(arr16);
arr16.push(10);
console.log(arr16);

//Enums are used to define a set of named constants
//Numeric enums 
//We can intialize enum value at one place and after initializing we can use it anyhwere in the program by importing enum
enum Direction{Up,Down,Left,Right};
let dir:Direction = Direction.Up;  //0
console.log(dir);

enum Color{
    Red,
    Green,
    Blue
};
let c:Color = Color.Green;  //1
console.log(c);

//enum export
export enum WeekDay{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};
//import enum   import {WeekDay} from './index.ts'
let day:WeekDay = WeekDay.Monday;  //0
console.log(day);

//with const enums
const enum Directions{
    Up,
    Down,
    Left,
    Right
};
//import const enum   import {Directions} from './index.ts'
let direction:Directions = Directions.Up;  //0
console.log(direction);


//Unknown type
let notSure:unknown = "Rajan Kumar";
if(typeof notSure === "string"){
    console.log("It is a string");
    notSure.toUpperCase();
}else if(typeof notSure === "number"){
    console.log("It is a number");
    notSure.toFixed(2);
}