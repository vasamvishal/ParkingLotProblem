const assert = require('assert');
const Parking = require("../main/Parking");
const ParkingOwner=require("../main/ParkingOwner");
const AirportSecurity=require("../main/AirportSecurity");
const ObjectTypes=require("../main/Objects");
let car = new Object();
let car1=new Object();

describe("parking lot problem for usercase 1", () => {

    it("given park is Car should return true", () => {
        let VehicleObject = new Parking(1);
        let result = VehicleObject.park(car,ObjectTypes.AIPORTSECURITY);
        assert.equal(false, result);
    });

    it("given car is unparked should return true", () => {
        let VehicleObject = new Parking(2);
        VehicleObject.park(car,ObjectTypes.AIPORTSECURITY);
        let result = VehicleObject.unPark(car);
        assert.equal(true, result);
    });

    it("when parking is not full should return false  ", () => {
        let VehicleObject = new Parking(1);
        let result=VehicleObject.park(car,ObjectTypes.PARKINGOWNER);
        assert.equal(false, result);
    });

    it("when parking is full should convey to parking owner and should return true", () => {
        let VehicleObject = new Parking(1);
        VehicleObject.park(car,ObjectTypes.PARKINGOWNER);
        let result=VehicleObject.park(car1,ObjectTypes.PARKINGOWNER);
        assert.equal(true, result);
    });

    it("when parking is full should convey to airportStaff and should return true", () => {
        let VehicleObject = new Parking(3);
        VehicleObject.park(car,ObjectTypes.AIPORTSECURITY);
        let result=VehicleObject.park(car1,ObjectTypes.AIPORTSECURITY);
        assert.equal(false, result);
    });

    it("when same car is parked again should return Exception", () => {
        try {
            let VehicleObject = new Parking(3);
            VehicleObject.park(car);
            VehicleObject.park(car);
        }
        catch (e) {
            assert.equal("Same car cannot be parked", e.message);
        }
    });

    it("when parking was full and again space is available convey to parking owner ", () => {
        try{
        let car3={};
        let VehicleObject = new Parking(1);
        VehicleObject.park(car,ObjectTypes.AIPORTSECURITY);
        VehicleObject.park(car1,ObjectTypes.AIPORTSECURITY);
        VehicleObject.park(car3,ObjectTypes.PARKINGOWNER);
        VehicleObject.unPark(car,ObjectTypes.PARKINGOWNER);
    }catch (e) {
        assert.equal("No car available to unpark",e.message);
    }
    });

    it("when car is not available to unpark ", () => {
        try {
            let car3 = {};
            let VehicleObject = new Parking(1);
            VehicleObject.park(car);
            VehicleObject.park(car1,ObjectTypes.PARKINGOWNER);
            VehicleObject.park(car3,ObjectTypes.PARKINGOWNER);
             VehicleObject.unPark(car3, ObjectTypes.PARKINGOWNER);
        }catch (e) {
            assert.equal("No car available to unpark",e.message);
        }
    });
});