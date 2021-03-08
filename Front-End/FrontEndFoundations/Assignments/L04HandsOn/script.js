class employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
}

class manager extends employee{
    constructor(name, salary, hireDate, descriptionOfJob){
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob
    }
    jobDescription(){
        console.log(`${this.name} was hired on ${this.hireDate}, and makes $${this.salary} because they ${this.descriptionOfJob}.`);
    }
}

class designer extends employee{
    constructor(name, salary, hireDate, experience){
        super(name, salary, hireDate);
        this.experience = experience;
    }
    yearsExperience(){
        console.log(`${this.name} was hired on ${this.hireDate}, and makes $${this.salary} because they have ${this.experience} of experience.`)
    }
}

class salesAssociate extends employee{
    constructor(name, salary, hireDate, degrees){
        super(name, salary, hireDate);
        this.degrees = degrees;
    }
    degreeCompleted(){
        console.log(`${this.name} was hired on ${this.hireDate}, and makes $${this.salary} because they have ${this.degrees} in sales.`)
    }
}

let maria = new manager("maria", 108000, "05/28/04", "manage the team");
let bob = new designer("Bob", 92000, "06/13/08", "4 years");
let avery = new salesAssociate("Avery", 86000, "11/30/08", "masters");

maria.jobDescription();
bob.yearsExperience();
avery.degreeCompleted();