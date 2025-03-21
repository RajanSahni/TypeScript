console.log("Hello World");
//regular function
function add(a: number, b: number): number{
    return a + b;
}
console.log(add(10, 20));

// Function using variable (divide) Here We have not used any function name but we have used variable name to store the function.
// This is called function expression.
// Here we have used the function keyword to define the function and assigned it to a variable divide.
// This variable becomes a callable function.
// The variable divide can be called like a function.
const divide =function (a: number, b: number): number{
    return a/ b;
}
console.log(divide(90,6)); 

// Arrow Function
// Arrow function is a new way of defining functions in ES6.
const multiply = (a: number, b:number): number =>{
    return a*b;
}

console.log(multiply(56,89))

//optional parameters
const greet =(username :string , Greeting ?: string ) :string =>{
    //That double Quotes is used to add space between the greeting and username
   // return Greeting + " " + username
  return ` ${username} ${Greeting ? Greeting : '' } `// ternary operator
//return `  ${Greeting ?  Greeting : ''} ${username}  `
}
// console.log(greet("Shri Ram ","Ki Jai Ho"));
console.log(greet(" Jai Shri Ram "))

//default parameters
const greet1 =(username :string , Greeting : string = "Ki Jai Ho") :string =>{
    //return Greeting + " " + username
    return ` ${username}${Greeting } `
}
console.log(greet1("Shri Ram "));

// functuin overloading
// defination of function overloading is that we can have multiple functions with the same name but different parameters.
function  overload(value: string):number
function overload(value: any[]):number
function overload(value:any ):number{
    return value.length
}
console.log(overload("Hello Ji kaise ho saare"))


function  overload1(value: string):string
function overload1(value: any[]):string
function overload1(value:any ):string{
    return value.toUpperCase()
}
console.log(overload1("Hello Ji kaise ho saare"))


//Rest Parameters
// Rest parameters are used to pass a variable number of arguments to a function.
// Rest parameters are denoted by three dots followed by the parameter name.
// Step 1: (0 + 1)  = 1
// Step 2: (1 + 2)  = 3
// Step 3: (3 + 3)  = 6
// Step 4: (6 + 4)  = 10
// Step 5: (10 + 5) = 15
// Step 6: (15 + 6) = 21
// Step 7: (21 + 7) = 28
// Step 8: (28 + 8) = 36
// Step 9: (36 + 9) = 45
// Step 10: (45 + 10) = 55

function add1(...num: number[]): number{
    return num.reduce((a, b) => a + b, 0);
}   
console.log(add1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Rest parameters with string
function add2( greeting:string,  ...str: string[]): void{
    str.forEach((name)=>{
        console.log(`${greeting} ${name}`);
})
}

add2("prem se boliye", "Shri Ram", "Jai Shri Ram", "Jai Hanuman", "Jai Bajrang Bali");

// output 
// prem se boliye + Shri Ram   = prem se boliye Shri Ram
// prem se boliye Jai Shri Ram
// prem se boliye Jai Hanuman
// prem se boliye Jai Bajrang Bali






