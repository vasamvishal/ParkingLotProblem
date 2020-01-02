const assert = require('assert');
const Parking = require("../PARKINGLOTPROBLEM/Parking");
let car = new Object();
let car1=new Object();
describe("parking lot problem for usercase 1", () => {

    it("given park is Car should return true", () => {
        let VehicleObject = new Parking(1);
        let result = VehicleObject.park(car);
        assert.equal(false, result);
    });

    it("given car is unparked should return true", () => {
        let VehicleObject = new Parking(2);
        VehicleObject.park(car);
        let result = VehicleObject.unPark();
        assert.equal(false, result);
    });

    it("when parking is not full should return false  ", () => {
        let VehicleObject = new Parking(1);
        let result=VehicleObject.park(car);
        assert.equal(false, result);
    });

    it("when parking is full should convey to parking ownerand should return true", () => {
        let VehicleObject = new Parking(1);
        VehicleObject.park(car);
        let result=VehicleObject.park(car1);
        assert.equal(true, result);
    });

    it("when parking is full should convey to airportStaff and should return true", () => {
        let VehicleObject = new Parking(1);
        VehicleObject.park(car);
        let result=VehicleObject.park(car1);
        assert.equal(true, result);
    });
});