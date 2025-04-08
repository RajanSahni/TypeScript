

namespace Geometry{
    export const PI=3.14

    export class Calc{
        area(width:number,height:number){
            return width*height
        }
    }

    export function calc_area(radius:number){
        return Math.PI *radius*radius
    }
}



console.log(Geometry.PI)

const calcu = new Geometry.Calc();
console.log(calcu.area(5,4))

console.log(Geometry.calc_area(5))