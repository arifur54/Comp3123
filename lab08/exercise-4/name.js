"use strict";
exports.__esModule = true;
var Name = /** @class */ (function () {
    function Name(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Name.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Name;
}());
exports.Name = Name;
var Name = /** @class */ (function () {
    function Name() {
    }
    return Name;
}());
exports.Name = Name;
