// type Guard in TypeScript
// In TypeScript, we can use type guards to check the type of a variable at runtime.
// We can use the typeof, instanceof, and in operator to check the type of a variable.
// We can use the type predicate to define a custom type guard.

// typeof 
function printId (id:number|string){
    if(typeof id === "number"){
        console.log(`Id is number ${id}`);
    }else{
        console.log(`Id is string ${id}`);
    }
}
//function call
printId(100);
printId("Abc123");

// instanceof
class Dog1{
    bark(){
        console.log("Dog is barking");
    }
}

class Cat1{
    meow(){
        console.log("Cat is meowing");
    }
}
 
function handlePet(pet:Dog1|Cat1){
    if(pet instanceof Dog1){
        pet.bark();
    }else{
        pet.meow();
    }
}
//function call
handlePet(new Dog1());
handlePet(new Cat1());

// custom type guard
interface Bird{
    fly():void;
}
interface Fish{
    swim():void;
}
 
function isBird(pet:Bird|Fish):pet is Bird{
    return (pet as Bird).fly !== undefined;
}
 
function handlePet1(pet:Bird|Fish){
    if(isBird(pet)){
        pet.fly();
    }else{
        pet.swim();
    }
}
//function call
handlePet1({fly:()=>console.log("Bird is flying")});
handlePet1({swim:()=>console.log("Fish is swimming")});


function isString(value:any):value is string{
    return typeof value === "string";
}

function checktype (value:number|string){
    if(isString(value)){
        console.log(`Value is string ${value}`);
    }else{
        console.log(`Value is number ${value}`);
    }
}
//function call
checktype(100);
checktype("Hello");