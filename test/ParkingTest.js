var assert = require('assert');
var Parking = require("../PARKINGLOTPROBLEM/Parking");
let car = new Object();
describe("parking lot problem for usercase 1", () => {

    it("Driver should be able to park is Car", () => {
        let VehicleObject = new Parking();
        let result = VehicleObject.park(car);
        assert.equal(true, result);
    });

    it("Driver should be able to unpark is Car", () => {
        let VehicleObject = new Parking(1);
        VehicleObject.park(car);
        let result = VehicleObject.unPark();
        assert.equal(true, result);
    });

    it("Parking lot owner should know when parking is full when owner has parked is car", () => {
        let VehicleObject = new Parking(1);
        VehicleObject.park(car);
        let result= VehicleObject.checkLotIsFull();
        assert.equal("capacity is full", result);
    });
    
});