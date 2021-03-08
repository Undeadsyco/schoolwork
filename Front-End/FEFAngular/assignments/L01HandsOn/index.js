"use strict";
var contactCard = /** @class */ (function () {
    function contactCard(firstName, phoneNumber) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }
    contactCard.prototype.sendMessage = function () {
        console.log("Name: " + this.firstName + ", Phone Number: " + this.phoneNumber);
    };
    return contactCard;
}());
var newPerson = new contactCard("Henry", 1234567890);
newPerson.sendMessage();
