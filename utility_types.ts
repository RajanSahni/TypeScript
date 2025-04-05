// Utility types for TypeScript
// //In TypeScript, utility types are built-in types that provide common type transformations.

//partial utility types 
interface User{
    name:string;
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
// yahan Required use karne ke jo optional property hai vo bhi fill karna hoga nahi to error aayega 
interface User321 {
    name: string;
    email?: string;  // Optional property
    age?: number;    // Optional property
  }
  
  // Making all properties required
  type RequiredUser = Required<User321>;
  
  const user1: RequiredUser = {
    name: "John Doe",
    email: "john@example.com", // Now required
    age: 76                   // Now required
  };
  
  // ❌ Error: Property 'email' is missing in type '{}' but required in type 'RequiredUser'.
  // const user2: RequiredUser = { name: "Alice" }; 
  

  /*
Readonly 
  */
type RequiredUser1 =Readonly<User321>;
const user21:RequiredUser1={
    name:'RajanSh',
    age:23,
    email:'rajan@gmail.com'
}

//user21.age=23 (here I will get an error because I am using Readonly property here )

//pick:Selects only specific keys from a type 
// (yahan hum jo value chahe use pass kar sakte hai yaha pe )
interface User32 {
    name: string;
    email: string;  // Optional property
    age: number;    // Optional property
  }
type RequiredUser12 =Pick<User32,'name'|'age'>;
const user212:RequiredUser12={
    name:'RajanSh',
    age:21
    // email:'' (yahan pe mujhe error milega kyonki maine pick utlity me sirf name aur age hi pass kara hai )
   
}
console.log(user212)

//Omit (Removes specific keys from a type )

type RequiredUser12a =Omit<User32,'email'>;
const user212a:RequiredUser12={
    name : 'Rajan',
    age:21
    // email:'' (yahan pe mujhe error milege kyonki yahan email choose nahi kar sakte hai hum  )
   
}
console.log(user212a)

//Record 
//Record is used to create an object type where all the keys K have values of the same type T.
 
type UserRecordInfo =  Record<string,number>;
//here Name(Key) should be string and 4 (value) should be number as mentioned in the record  
const recordInfo:UserRecordInfo={
    Name : 4,
    // 647: 'Rajan' (it gives error here )
    // Name1:'Ram' ( we will also get error here )
}

console.log(recordInfo)

// creating user record for user roles 

type Roles = 'admin' | 'user' |'guest';
//type permissionRole=Record<Roles,boolean>
type permissionRole=Record<Roles,string>

const booleanRole:permissionRole ={
 
    // admin:true,
    // user:false,
    // guest:false
    admin:'Rajan',
    user:'Sumit',
    guest:'Aaryan'
}

console.log(booleanRole)

//Exclude (Exclude is used to remove types from a union.)
type Roles1 = 'admin' | 'user' | 'guest';

type WithoutAdmin = Exclude<Roles1, 'admin'>;

const exRole:WithoutAdmin='guest';
const exRole1:WithoutAdmin='guest';


//Extract (Extract is used to keep only the types that are common in both unions.)
type Roles12 = 'admin' | 'user' | 'guest';

type OnlyAdmin = Extract<Roles12, 'admin' | 'superadmin'>;
const extract1:OnlyAdmin='admin'

//NonNullable (NonNullable is used to remove null and undefined from a type.)
//It filters out both null and undefined from a union type.

type maybeName=string | null | undefined;
type Nameonly = NonNullable <maybeName>

const userNull :Nameonly='Rajan'
//here both null and undefined give error here 
//const userNull :Nameonly=null
//const userNull :Nameonly=undefined



//ReturnType (ReturnType is used to get the type of the value that a function returns.
//You pass in a function type, and it gives you back the type of the return value.)
function getUser() {
    return {
      id: 1,
      name: "Alice",
    };
  }
  
  type UserReturn1 = ReturnType<typeof getUser>;
  const returnUser:UserReturn1={
    id:3,
    name:'Sonu'
  }

  //Parameter (Parameters is used to get the types of all parameters of a function as a tuple (i.e., an array-like list))
  function greeting12(name: string, age: number) {
    console.log(`Hello ${name}, age ${age}`);
  }
  
  type GreetParams = Parameters<typeof greeting12>;

  const params :GreetParams =['Sumit',13]
    
  
