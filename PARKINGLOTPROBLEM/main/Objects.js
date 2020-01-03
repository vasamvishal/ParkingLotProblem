const AirportSecurity=require("../main/AirportSecurity");
const ParkingOwner=require("../main/ParkingOwner");
const airportSecurity=new AirportSecurity();
const parkingOwner=new ParkingOwner();
let observerTypes;
observerTypes = {
        PARKINGOWNER: (parkingOwner),
        AIPORTSECURITY: (airportSecurity)
};
module.exports=observerTypes;

