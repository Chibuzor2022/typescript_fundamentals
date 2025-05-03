"use strict";
// Implement the Car class that implements Vehicle
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// Create an instance of Car
const myCar = new Car("Honda", "Accord", 1998);
// Call the start method
myCar.start();
