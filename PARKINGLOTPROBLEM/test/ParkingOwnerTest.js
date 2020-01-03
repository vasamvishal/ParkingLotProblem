

const ParkingOwner=require("../main/ParkingOwner");
let parkingOwner=new ParkingOwner();
const assert = require("assert");

describe("Test case for ParkingOwnerTest", () => {
    it("if Parking lot is full should print parking lot is full", () => {
        {
           parkingOwner.parkinglotIsFull();
           let result1=parkingOwner.isFull;
           assert.equal(true,result1);
        }
    })
    })