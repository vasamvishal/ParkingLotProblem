//Welcome to parking lot problem//
// const ParkingOwner = require("../PARKINGLOTPROBLEM/ParkingOwner");
// let AirportSecurity=require("../PARKINGLOTPROBLEM/AirportSecurity");
let Test=require("../PARKINGLOTPROBLEM/Test");
// const parkingOwner = new ParkingOwner();
// const airportSecurity=new AirportSecurity();
class Parking {
    intialCapacity = 0;
    capacity;
    capacityArray = [];

    constructor(capacity) {
        this.capacity = capacity;
    }

    park = (car) => {
        const isLotFull = this.#checkLotIsFull(this.capacityArray, this.capacity);
        if (isLotFull === false) {
            if (this.capacityArray.length <= this.capacity) {
                console.log(this.capacityArray.length)
                this.capacityArray.push(car);
                this.intialCapacity++;
                return false;
            }
        } else {
            return true;
        }
    };
    unPark = () => {
        this.capacityArray.pop();
        const isLotFull = this.#checkLotIsFull(this.capacityArray, this.capacity);
        if (isLotFull === true) {
            return true;
        }
        return false;
    };

    #checkLotIsFull = (capacityArray, capacity) => {
        let isFull = true;
        console.log(capacityArray.length);
        if (capacityArray.length === capacity) {
            Test.subscribe();
            Test.notify();
            return isFull;
        } else {
            isFull = false;
            return isFull;
        }
    };
}

module.exports = Parking;