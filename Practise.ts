//1.How to find factorial of number 
function factorial (num:number):number{
    if(num==0 || num ==1){
        return 1;
    }
    else{
        return num * factorial(num-1);
    }
}

console.log(factorial(5));

/*
2.define a function that accepts a user object 
(with name , age and email ) and Returns a formatted string  
*/

function userObject(user:{name:string,age:number,email:string}):string{
    return `Name is ${user.name} and age is ${user.age} and email is ${user.email}`;
}

console.log(userObject({name:"Shri Ram",age:25,email:" abc123@gmai.com "}));
 //Or 


interface UserData{
    name:string;
    age:number;
    email:string;
}

function formatUser(user:UserData):string{
    return `User ${user.name} and age is ${user.age} can be connected via ${user.email}`;        

}

const user:UserData = {

    name:" Raj",
    age:25,
    email:" 22bcaf49@gmail.com"
}

console.log(formatUser(user));



