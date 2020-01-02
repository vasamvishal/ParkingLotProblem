//Welcome to parking lot problem//
var ParkingOwner=require("../PARKINGLOTPROBLEM/ParkingOwner");
var parkingOwner =new ParkingOwner();
class Parking{
    car;
    intialCapacity=0;
    constructor(fullCapacity)
    {
        this.fullCapacity=fullCapacity;
    }
    park(car){
        let result=parkingOwner.checkLotIsFull(this.intialCapacity,this.fullCapacity);
        if(result==true){
            this.car=car;
            this.intialCapacity++;
            return true;
        }else{
            return false;
        }
    }
    unPark()
    {
        console.log(this.car);
        this.car=null;
        return true;
    }
  } 

module.exports=Parking;