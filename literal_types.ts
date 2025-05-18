// run : ts/literal_types.ts
// literal types
// In TypeScript, we can use literal types to specify the exact value a variable can have.  
// Always try to use literal start with capital letter.
// string literal using typescript
let OredrStatus: "pending" | "completed" | "rejected";
OredrStatus = "completed"

type OrderStatus1 = "delivered" | "pending" | "cancelled";
let orderStatus: OrderStatus1 = "delivered"; 
console.log(orderStatus);

// number literal
let day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
day = 5;
console.log(day);

//boolean literal

let isvisible: true | false;
isvisible = true;
console.log(isvisible);

// mixed literal    
type mixedliteral = 1 | "one" | true | {name:string ; age:number};
let mixedliteral : mixedliteral = {name:"Rajan",age:21};
console.log(mixedliteral);

// creating action buttons
type Action = "add" | "edit" | "delete";
function performAction(action:Action){
    switch(action){
        case "add": console.log("Add action performed");
        break;
        case "edit": console.log("Edit action performed");
        break;
        case "delete": console.log("Delete action performed");
        break;
        default: console.log("Invalid action performed");
    }
}
//function call
performAction("add");
// performAction("edit");
// performAction("delete");


// literal in function
function printStatus(status:"pending" | "completed" | "rejected"){
    console.log(`Order status is ${status}`);
}
//function call
printStatus("completed");

// literal in interface

interface Buttonconfig{
    size:"small" | "medium" | "large";
    color: "Red" | "Green" | "Blue";
    shape: "round" | "square" | "rectangle";

}
let config:Buttonconfig={
    size:"medium",
    color:"Red",
    shape:"rectangle"
};

console.log(config);




