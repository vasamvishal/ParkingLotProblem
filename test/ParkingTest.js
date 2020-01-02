var assert=require('assert');
var Parking=require("../PARKINGLOTPROBLEM/Parking");
describe("parking lot problem for usercase 1", () => {
    it("Driver should be able to park is Car", () => {
        let VehicleObject=new Parking();
        let result=VehicleObject.park(new Object());
        assert.equal(true,result);
    });
});