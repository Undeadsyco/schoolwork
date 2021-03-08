interface Person{
    firstName: string;
    lastName?: string;
}

interface Contact{
    phoneNumber: number;
    email?: string;
}

class contactCard implements Person, Contact{
    firstName: string;
    phoneNumber: number;

    constructor(firstName: string, phoneNumber: number){
        this.firstName = firstName
        this.phoneNumber = phoneNumber
    }

    sendMessage(){
        console.log(`Name: ${this.firstName}, Phone Number: ${this.phoneNumber}`)
    }
}

let newPerson = new contactCard("Henry", 1234567890);
newPerson.sendMessage();