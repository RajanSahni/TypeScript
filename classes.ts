//definition of class in typescript
//class is a blueprint for creating objects with specific properties and methods already attached to it.
class Person {
    name:string;
    age:number;
    email:string;

    constructor(name:string,age:number,email:string){
        this.name=name;
        this.age=age;
        this.email=email;
    }

    greeting1():string{
        return `Hello ${this.name} and age is ${this.age} and email is ${this.email}`;
    }
}
//creating object of class below
const new_person = new Person("Rajan Kumar ",21,"rajan@gmail.com");
console.log(new_person.greeting1());
console.log(new_person.name);
console.log(new_person.age);
console.log(new_person.email);



//acees modifiers in typescript
//Access modifiers are keywords that set the accessibility of properties and methods in a class.
//There are three access modifiers in TypeScript:
//Public: The property or method can be accessed from anywhere.
//Private: The property or method can only be accessed within the class.
//Protected: The property or method can be accessed within the class and its subclasses. 

class Person1 {
    public name:string;
    public age:number;
    protected email:string;

    constructor(name:string,age:number,email:string){
        this.name=name;
        this.age=age;
        this.email=email;
    }

    greeting1():string{
        return `Hello ${this.name} and age is ${this.age} and email is ${this.email}`;
    }
}

//creating object of class below
const new_person1 = new Person1("Rajan Kumar ",21,"rajan@gmail");
console.log(new_person1.greeting1());
/*
Thses below lines will give error because we are trying to access private and protected members outside the class 
it can be work only inside the class or its subclass
console.log(new_person1.age);//error
console.log(new_person1.email);//error

*/


//Inheritance in typescript
//Inheritance is a mechanism in which one class acquires the properties and methods of another class.
//The class that inherits the properties and methods is known as the derived class or subclass.
//The class whose properties and methods are inherited is known as the base class or superclass.
//In TypeScript, we can inherit properties and methods from a base class by using the extends keyword.


class Employee extends Person1{
    department:string;

    constructor(name:string,age:number,email:string,department:string){
        //jo bhi properties hain parent class ke unko inherit karne ke liye super keyword ka use karte hain
        super(name,age,email);

        //department is the property of this class so we have to initialize it here
        this.department=department;
    }

    greeting():string{
        return `Hello ${this.name} and age is ${this.age} and email is ${this.email} and department is ${this.department}`;
    }
}

//creating object of class below
const new_employee = new Employee("Rajan Kumar ",21,"rajan@gmail","IT");
console.log(new_employee.greeting());


//abstract class in typescript
//Abstract classes are base classes from which other classes may be derived.
//They may not be instantiated directly.

abstract class shape{
   abstract getArea():number; //abstract method 

   printArea():void{
    console.log(`The Area  is ${this.getArea()}`);  // calling abstract method
   }   
}

class Rectangle extends shape{
    length:number;
    breadth:number;

    constructor(length:number,breadth:number){
        super();
        this.length=length;
        this.breadth=breadth;
    }

    getArea():number{
        return this.length * this.breadth;
    }
}

const new_rectangle = new Rectangle(10,20);
new_rectangle.printArea();

// setter and getter in typescript
//In TypeScript, we can use the get and set keywords to define getter and setter methods in classes.
//A getter method is used to get the value of a property, and a setter method is used to set the value of a property.


class Circle{
    private _radius:number;

    constructor(radius:number){
        this._radius=radius;
    }

    get radius():number{
        return this._radius;
    }

    set radius(value:number){
        this._radius=value;
    }

    getArea():number{
        return Math.PI * this._radius * this._radius;
    }
}

const new_circle = new Circle(10);
console.log(new_circle.radius);
new_circle.radius=20;
console.log(new_circle.radius);
console.log(new_circle.getArea());