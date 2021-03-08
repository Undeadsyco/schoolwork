"use strict";
var entry = /** @class */ (function () {
    function entry(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
    entry.prototype.sayInfo = function () {
        console.log("First Name: " + this.firstName + ", Last Name: " + this.lastName + ", Birthday: " + this.birthday);
    };
    return entry;
}());
var newPerson = new entry("Albert", "Einstein", new Date(5 / 14 / 1879));
newPerson.sayInfo();
var numbers = ['twelve', 'one-hundred', 'sixteen', 'forty-four', 'seventy-three', 'three-million'];
function sortArray(array) {
    return array.sort();
}
console.log("array before sorting" + numbers);
console.log("array after sorting" + sortArray(numbers));
