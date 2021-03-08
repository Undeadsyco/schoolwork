class rectangle{
    private height: number;
    private width: number;

    public constructor(height: number, width: number){
        this.height = height;
        this.width = width;
    }

    perimiter(): number {
        return (this.height*2) + (this.width*2);
    }
}

// const myYard = new rectangle(24, 32);
// const naighborsYard = new rectangle(32, 34);
// console.log(square.perimiter2());
// console.log(myYard.perimiter());
// console.log(naighborsYard.perimiter());

// const rectangle2 = class {
//     height: number;
//     width: number;

//     constructor(height: number, width: number){
//         this.height = height;
//         this.width = width;
//     }

//     perimiter2(): number {
//         return (this.height*2) + (this.width*2);
//     }
// }

// var square = new rectangle2(2, 2);

// interface person{
//     name: string;
// }
// interface flyable{
//     flyHeight: number;
// }
// interface powers extends person, flyable{
//     powers: string[];
// }
// class superHero implements powers{
//     name: string;
//     flyHeight: number;
//     powers: string[];

//     constructor(firstName: string, flyingHeight: number, powerList: string[]){
//         this.name = firstName;
//         this.flyHeight = flyingHeight;
//         this.powers = powerList;
//     }
// }

// const frozone = new superHero("Frozone", 10000, [
//     "freeze water from any moisture", 
//     "ice skate on frozen water"
// ])
// console.log(frozone)

// interface Shape{
//     sides: number;
// }

// interface Triangle extends Shape{
//     angles: number[];
// }

// let equilateral = <Triangle>{};
// equilateral.sides=3;
// equilateral.angles=[60, 60, 60]

// console.log(equilateral);

// class Square extends rectangle{
//     area(): number{
//         return this.height * this.width
//     }
// }

// const newSquare: Square = new Square(3, 3);
// const area: number = newSquare.area();
// const perimiter: number = newSquare.perimiter();

// console.log("Area: "+area+" perimiter: "+perimiter);