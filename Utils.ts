//Run :ts-node ts/Utils.ts
//Exporting (in mathUtils.ts)

export function adding1(a: number, b: number) {
    return a + b;
  }
  
  export const PI = 3.14;


   export class calculator{
    sum(a:number,b:number):number{
        return a + b
    }

    divide(a:number,b:number):number{
        return a/b
    }
  }


  export default function logging(message:string){
    console.log(message);
  }