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


//Never type
// function error(message: string): never {
//     throw new Error(message);
// }
// function fail() {
//     return error("Something failed");
// }
// function infiniteLoop(): never {
//     while (true) {
//     }
// }   
//error("Something failed");
//fail();
//infiniteLoop();   


// void type
function warnUser(): void {
    console.log("This is my warning message");
}
warnUser();

function printValue(val:any):void{
    console.log(val);
}   
printValue("Hello World");
 

function message(message:string):void{
    console.log(message);   
    return undefined;
}
message("Hello World");


function processUserInput(callback: (input: string) => void) {
    const userInput = "Hello, TypeScript!";
    callback(userInput);
}

processUserInput((input) => console.log("User Input:", input));



//Type inference (TypeScript automatically assigns the type)
let str1 = "Hello World";
console.log(str1);  //Hello World
let num1 = 10;
console.log(num1);  //10

// Type Assertion (TypeScript allows you to override its inferred and analyzed view of types in any way you want)
//Type assertion is like type casting in other languages
let str2:any = "Hello World";   
let str3 = str2 as string;  //Or let str3 = str2 as number;
console.log(str3);  //Hello World


let str4:any = "Hello World";
let str5 = (str4 as string).toUpperCase();   
console.log(str5);  //Hello World

// type Union (Its will Take more than one type on same variable)
let code:string | number;
code=505;
code="Rajan Kumar";
console.log(code);

function displayType(code:string | number){
    console.log(`code is ${code}`);
}
displayType(123);
displayType("ABC");

//Type Narrowing  (Type narrowing is narrowing down the type of a variable or it help us to find the proper type of variable)

function displayType1(code:string | number){
    if(typeof code === "string"){
        console.log(`code is ${code.toUpperCase()}`);
    }else{
        console.log(`code is ${code.toFixed(2)}`);
    }
}
displayType1(123.3456);
displayType1("welcome to my world");

// interface (An interface is a way to define a contract on a function with respect to the arguments and their type.)
interface Person{
    name:string;
    age:number; 
}
let person:Person = {
    name:"Rajan Kumar",
    age:21
//phone:123456789 (It will give error because phone is not defined in interface)
};
console.log(person);

// void function in interface
interface Person1{
    name:string;
    age:number; 
    greet():void;
}
let person1:Person1 = {
    name:"Sumit Kumar",
    age:15,
    greet(){
        console.log("He Is my younger Brother");

    }
};
console.log(person1);
person1.greet();


// function in interface
interface Person2{
    (a:number,b:number):number;
}
 const add2:Person2=(x,y)=>x+y;
 console.log(add2(10,20));

 // Type alias (Type aliases create a new name for a type.)
    type Name = string;
    type Age = number;
    type Person3 = {
        name:Name;
        age:Age;
    };
    let person3:Person3 = {
        name:"Rajan Kumar",
        age:21
    };
    console.log(person3.name);

    // Type alias with Union
    type ID = string | number;
    let id:ID;
    id=123456789;
    console.log(id);
    id="Rajan Kumar";
    console.log(id);
     

    //Interface vs type alias
    interface info{
        name:string;
        age:number;
    }
    interface info1 extends info{
        phone:number;
    }

    let custinfo:info1={
        name:"Rajan Kumar",
        age:21,
        phone:123456789
    }
console.log(custinfo);

// otherway to define interface its called interface merging and it can be possible only in interface not in type alias .
// its because alias is just a name and Name cannot be use same at two places 
// but interface can be use same name at two places
interface info2{
    name:string;
    age:number;
}
interface info2{
    phone:number;
}

let custinfo1:info2={
    name:"sumit Kumar",
    age:12,
    phone:123686889
}
console.log(custinfo1);



//Type alias with Intersection
//Intersection types allow us to combine multiple types into one. This means that you can merge two or more types to create a new type.
// Now We will use type alias using intersection

type car={
    name:string;
    model:number;
    color:string;
}
// Here Below we are using intersection by using letter (&) symbol
type moreinfo = car &{
    price:number;   
}
let carinfo:moreinfo={
    name:"Audi",
    model:2021,
    color:"Black",
    price:5000000
}
console.log(carinfo);



