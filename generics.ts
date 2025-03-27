//Run : ts-node ts/generics.ts
// Generics in TypeScript
// Generics are used to create reusable components.
// In the above example, we have created a generic class that can be used with any data type.

/*
Generics are a way to create components(functions , classes , or interfaces) 
that work with different types without losing type safety 
*/
//generics in function
function genericstype<T>(arg:T):T{
    return arg;
}

console.log(genericstype<string>("Hello Rajan"));
console.log(genericstype<number>(100));
console.log(genericstype<boolean>(true));

// interface with generics
interface generic_interface<T,U>{
    name:T;
    age:U;
}

let new_interface:generic_interface<string,number>={
    name:"Rajan",
    age:21
};
console.log(new_interface);

//generic constraints
//In TypeScript, we can use generic constraints to restrict the types that can be passed to a generic type.
//We can use the extends keyword to specify the type that can be passed to a generic type.

function getLength<T extends {length:number}>(arg:T):number{
    return arg.length;
}

console.log(getLength("Hello"));
console.log(getLength([1,2,3,4,5]));//array has length property
//console.log(getLength(1234));//error as number does not have length property 

//generic classes
class Box<T>{
    contents:T;
    constructor(value:T){
        this.contents=value;
    }

    getContents():T{
        return this.contents;
    }
}

let numberBox = new Box<number>(100);
console.log(numberBox.getContents());

let stringBox = new Box<string>("Hello");
console.log(stringBox.getContents());


// stack class using generics
class Stack<T>{
   private items:T[]=[];

    push(items:T):void{ {
        this.items.push(items);
    } }

    pop():T | undefined{
        return this.items.pop();
    }

    getstack():T[]{
        return this.items;   
    }
}
// string stack
const stack = new Stack<string>();
stack.push("Hello");
stack.push("Rajan");
stack.push("Kumar");
stack.push("Sahni");
console.log(stack.getstack());

console.log(stack.pop());

console.log(stack.getstack());
 // number stack
const numstack = new Stack<number>();
numstack.push(1);
numstack.push(2);
numstack.push(4);
numstack.push(7);
console.log(numstack.getstack());

console.log(numstack.pop());

console.log(numstack.getstack());