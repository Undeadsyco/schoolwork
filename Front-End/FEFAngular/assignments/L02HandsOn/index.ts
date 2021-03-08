interface Person {
    firstName: string;
    lastName: string;
    birthday: Date;
}

class entry implements Person{
    firstName: string;
    lastName: string;
    birthday: Date;

    constructor(firstName: string, lastName: string, birthday: Date){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }

    sayInfo(){
        console.log(`First Name: ${this.firstName}, Last Name: ${this.lastName}, Birthday: ${this.birthday}`)
    }
}

let newPerson = new entry("Albert", "Einstein", new Date(5/14/1879));
newPerson.sayInfo();

let numbers: Array<string> = ['twelve', 'one-hundred', 'sixteen', 'forty-four', 'seventy-three', 'three-million'];

function sortArray<S>(array: S[]):S[]{
    return array.sort()
} 

console.log("array before sorting" + numbers)
console.log("array after sorting" + sortArray(numbers))