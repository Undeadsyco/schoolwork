function addNumbers(a, b){
    var c = a + b;
    console.log(c)
}

addNumbers(4, 22)

//var key word
var number = 3;
console.log(number);

//the var keyword can be re-evaluated
number = 4;
console.log(number);

//and redeclared
var number = 5;
console.log(number);

//let keyword
let text = "Hello"
console.log(text);

//let can be re-evaluated
text = "Bye";
console.log(text);

//but not redeclared
//let text = "Welcome";

//const keyword
const boolean = true;
console.log(boolean)

//const cannot be changed
//boolean = false;

let user = {
    firstName: "Coder",
    lastName: "Bill",
    fullName: function(){
      return this.firstName + " " + this.lastName;
    }
  }
  console.log(user.fullName());