var idealCar = {
    name: "mustang",
    color: "red",
    weightInPounds: "3600 pounds",
    myCar: function(){
        console.log(`MY ideal car is ${this.name} with a color of ${this.color}, but i do not want it to be over ${this.weightInPounds}`);
    }
}

idealCar.myCar();