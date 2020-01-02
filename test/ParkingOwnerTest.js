var assert = require('assert');
var ParkingOwner = require("../PARKINGLOTPROBLEM/ParkingOwner");
describe("parkinglotOnwer testcase", () => {

    it("Should return true if intialCapacity is not equal to fullCapacity", () => {
        let VehicleObject = new ParkingOwner();
        let result = VehicleObject.checkLotIsFull(0,1);
        assert.equal(true, result);
    });

    it("Should return false if intialCapacity is equal to fullCapacity", () => {
        let VehicleObject = new ParkingOwner();
        let result = VehicleObject.checkLotIsFull(1,1);
        assert.equal(false, result);
    });
});