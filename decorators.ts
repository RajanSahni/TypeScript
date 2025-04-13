// // Decorators Decorators in TypeScript are a powerful feature 
// that allow you to attach metadata, modify behavior, or extend functionality of classes, methods, properties, and parameters
//  — all using a clean, declarative syntax.

// They are experimental but widely used in frameworks like Angular,
//  and can be enabled by turning on certain options in your 
// tsconfig.json.
// {
//     "experimentalDecorators": true,
//     "emitDecoratorMetadata": true
//   }

//class decorators 
function logger (constructor:Function){
    console.log(`Logging creation of class:${constructor.name}`)
}
@logger
class People {
    constructor(public name:string ){}
}

const p1 = new People('Nandu');
console.log(p1)


/*..............method decorator .............*/ 
 // for this method we should enable this ( "experimentalDecorators": true,) because here inside the class we are passing only two parameter(a , b) but 
 // inside LogMethod function we are passing three parameters i.e (target:Object,propertyKey:string ,descriptor:PropertyDescriptor )
function LogMethod(target:Object,propertyKey:string ,descriptor:PropertyDescriptor ){
    const originalMethod=descriptor.value;
    descriptor.value=function(...args:any[]){
        console.log(`Method called :${propertyKey}`)
        return originalMethod.apply(this,args)
    }
}


class calcop{
    @LogMethod
    adding(a:number ,b:number):number {
        return a+b
    }
}

//class instance 
const p2=new calcop();
console.log(p2.adding(2,8))



function LogMethod1(target: any, methodName: string, descriptor: PropertyDescriptor) {
    console.log(`Method decorator called for: ${methodName}`);
  }
  
  class Calculator {
    @LogMethod1
    add(a: number, b: number) {
      return a + b;
    }
  }


 
/*..............accessor & property  decorator .............*/  
/*.This code modifies the property on the prototype (Cars.prototype) directly before the instance is created. 
Then, when you define this in the class:brand: string = 'Tesla';
TypeScript/JavaScript tries to assign the value 'Tesla' to brand during object construction (in the constructor). 
But since your decorator has already marked brand as non-writable, the assignment fails — even if you're not reassigning later!

That's why the error is thrown even without the line myCars.brand = 'tata'.
*/  
// function Readonly(target:any , propertyKey:string ){
//     Object.defineProperty(target, propertyKey,{
//         writable:false
//     });
// }

// class Cars{
//     @Readonly
//     brand:string='Tesla';
    

// }
// const myCars= new Cars();
// //myCars.brand='tata'
// console.log(myCars.brand)





function Readonly(target:any , propertyKey:string ){
    Object.defineProperty(target, propertyKey,{
        writable:false
    });
}

class Cars{
    
    private _brand:string='Tesla';
     @Readonly
    get brand(){
        return this._brand
    }

    set brand(value:string){
        this._brand=value;
    }
    

}
const myCars= new Cars();
//myCars.brand='tata'
console.log(myCars.brand)



/*..............parameter decorator .............*/  
function LogParameter(target:Object, propertyKey:string, parameterIndex:number){
    console.log(`Parameter in method ${propertyKey} at index ${parameterIndex}`)
}

class UserParam{
    createUser(
       @LogParameter name:string,
        @LogParameter age:number
      ){
        console.log(`Users:${name},Age:${age}`)
      }
}

const useParam =new UserParam();
useParam.createUser('Diya',20)


  
 