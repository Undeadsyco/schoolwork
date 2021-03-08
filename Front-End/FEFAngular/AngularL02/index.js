"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var rectangle = /** @class */ (function () {
    function rectangle(height, width) {
        this.height = height;
        this.width = width;
    }
    rectangle.prototype.perimiter = function () {
        return (this.height * 2) + (this.width * 2);
    };
    return rectangle;
}());
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
// const myYard = new rectangle(24, 32);
// const naighborsYard = new rectangle(32, 34);
// console.log(square.perimiter2());
// console.log(myYard.perimiter());
// console.log(naighborsYard.perimiter());
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
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.area = function () {
        return this.height * this.width;
    };
    return Square;
}(rectangle));
var newSquare = new Square(3, 3);
var area = newSquare.area();
var perimiter = newSquare.perimiter();
console.log("Area: " + area + " perimiter: " + perimiter);
