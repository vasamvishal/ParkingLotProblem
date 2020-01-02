const ParkingOwner=require("../PARKINGLOTPROBLEM/ParkingOwner");
const AirportSecurity=require("../PARKINGLOTPROBLEM/AirportSecurity");
const parkingOwner = new ParkingOwner();
const airportSecurity=new AirportSecurity();
class Test {

    constructor() {
        this.array=[];
    }
    subscribe()
    {
        this.array.push(parkingOwner);
        this.array.push(airportSecurity);
    }
    notify()
    {
        for( let i=0; i< this.array.length;i++)
        {
            console.log(this.array[i],"Have been notified");
        }
    }
}
module.exports=new Test();