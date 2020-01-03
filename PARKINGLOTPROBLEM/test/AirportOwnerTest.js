const AirportSecurity=require("../main/AirportSecurity");
let airportSecurity=new AirportSecurity();
var assert=require('assert');

describe("Test case for AirportSecurityTest", () => {
    it("if Parking lot is full should print parking lot is full", () => {
        {
            airportSecurity.parkinglotIsFull();
            let result=airportSecurity.isFull;
            assert.equal(true,result);
        }
    })
})