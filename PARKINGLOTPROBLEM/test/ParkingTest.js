const assert = require('assert');
const Parking = require("../main/Parking");
const ParkingOwner=require("../main/ParkingOwner");
const AirportSecurity=require("../main/AirportSecurity");
let car = new Object();
let car1=new Object();
const parkingOwner=new ParkingOwner();
const airportStaff=new AirportSecurity();

describe("parking lot problem for usercase 1", () => {

    it("given park is Car should return true", () => {
        let VehicleObject = new Parking(1);
        let result = VehicleObject.park(car,airportStaff);
        assert.equal(false, result);
    });

    // it("given car is unparked should return true", () => {
    //     let VehicleObject = new Parking(2);
    //     VehicleObject.park(car);
    //     let result = VehicleObject.unPark();
    //     assert.equal(true, result);
    // });

    it("when parking is not full should return false  ", () => {
        let VehicleObject = new Parking(1);
        let result=VehicleObject.park(car,parkingOwner);
        assert.equal(false, result);
    });

    it("when parking is full should convey to parking owner and should return true", () => {
        let VehicleObject = new Parking(1);
        VehicleObject.park(car,parkingOwner);
        let result=VehicleObject.park(car1,parkingOwner);
        assert.equal(true, result);
    });

    it("when parking is full should convey to airportStaff and should return true", () => {
        let VehicleObject = new Parking(3);
        VehicleObject.park(car,airportStaff);
        let result=VehicleObject.park(car1,airportStaff);
        assert.equal(false, result);
    });

    it("when same car is parked again should return Exception", () => {
        try {
            let VehicleObject = new Parking(3);
            VehicleObject.park(car);
            VehicleObject.park(car);
        }
        catch (e) {
            assert.equal("Same car cannot be entered", e.message);
        }
    });

    it("when parking was full and again space is available convey to parking owner ", () => {
        let car3={};
        let VehicleObject = new Parking(1);
        VehicleObject.park(car,airportStaff);
        VehicleObject.park(car1,airportStaff);
        VehicleObject.park(car3,parkingOwner);
        let result=VehicleObject.unPark(car,parkingOwner);
        assert.equal(true, result);
    });

    it("when car is not available to unpark ", () => {
        try {
            let car3 = {};
            let VehicleObject = new Parking(1);
            VehicleObject.park(car, airportStaff);
            VehicleObject.park(car1, airportStaff);
            VehicleObject.park(car3, parkingOwner);
             VehicleObject.unPark(car3, parkingOwner);
        }catch (e) {
            assert.equal("No car available to unpark",e.message);
        }
    });
});