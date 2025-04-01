// Keyof and Index Signature
// Keyof is used to get the keys of an object type as a union of string literal types.
// Index signature is used to define the type of keys and values in an object when the keys are not known in advance.
interface Person12{
    //main yahan pe directly keys (name, age, email, phone) ko use kar sakta hu
    name:string;
    age:number;
    email:string;
    phone:number
}

type Personkeys = keyof Person12; // "name" | "age" | "email" | "phone"
let keys:Personkeys = "email"; //Yahan pe mujhe sirf "name" | "age" | "email" | "phone" me se koi bhi key assign kar sakta hu
//keys = "address"; //Error: Type '"address"' is not assignable to type 'Personkeys'.
console.log(keys); //Output: email