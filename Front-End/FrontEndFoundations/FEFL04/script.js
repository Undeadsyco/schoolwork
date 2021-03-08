// class aClass{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     sayName(){
//         alert(this.name);
//     }
//     sayAge(){
//         alert(this.age);
//     }
// }
//================================================
// const myInstance = new aClass("brandon", 22);
// myInstance.sayName();

// class vehicle{
//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
// }
// const myCar = new vehicle("Ford", "F150", 2018);
// console.log(myCar);
//================================================
// class person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     run(){
//         console.log(`${this.firstName} ${this.lastName} is running.`)
//     }
//     walk(){
//         console.log(`${this.firstName} ${this.lastName} is walking.`)
//     }
//     greeting(){
//         console.log(`hello my name is ${this.firstName} ${this.lastName}.`)
//     }
// }

// const rose = new person("rose", "dawson");
// rose.run();
// rose.walk();
// rose.greeting();
//================================================
// class car{
//     constructor(make, model, year){
//         this._make=make;
//         this._model=model;
//         this._year=year;
//     }

//     get make(){
//         return this._make;
//     }
//     set make(value){
//         const possibleMakes = ["Honda", "Ford", "Dodge"];

//         if(possibleMakes.includes(value)){
//             this._make = value;
//         }else{
//             throw Error(value+" is not a valid make!")
//         }
//     }

//     get discription(){
//         return this._year+" "+this._make+" "+this._model; 
//     }

// }
// const myCar = new car("ford", "F150", 2018);
// myCar._make = "volvo";
// console.log(myCar.discription);
//================================================
// class person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     greeting(){
//         console.log(`hello my name is ${this.firstName} ${this.lastName}.`)
//     }
// }

// let brian=new person("Brian", "Grffin");
// let austin=new person("Austin", "Smith");

// brian.greeting();
// austin.greeting();
// ================================================
class person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting(){
        console.log(`hello my name is ${this.firstName} ${this.lastName}.`)
    }
}

class newStudent extends person{
    constructor(studentId, firstName, lastName){
        super(firstName, lastName);
        this.studentId=studentId;
    }
    studentInfo(){
        console.log(`${this.firstName} ${this.lastName} has the id of ${this.studentId}.`)
    }
}

let student = new newStudent(125892, "john", "smith");
student.greeting();