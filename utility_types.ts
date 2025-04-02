// Utility types for TypeScript
// //In TypeScript, utility types are built-in types that provide common type transformations.

//partial utility types 
interface User{
    name?:string;
    age:number;
    email:string;
}

//after using partial utility type we can make any property optional in the interface
const updateUser=(user:Partial<User>)=>{
    console.log(user);
} 

updateUser({name:"Rajan"});
updateUser({ });//yahan agar hum kuch nahi pass karege to bhi chalega kyuki humne partial use kiya hai



type User123=Partial<User>;
let user13:User123 ={
    name :'Rajan Kumar Sahni',
    email : ' ' // here it is treated as optional
}

console.log(user13)




//after using Required in utility  types  for the same interface that is User


type User1235=Required<User>;
let user134:User123 ={
    name :"Rajan",
    email : ' ' // here it is treated as optional
}

console.log(user134)



