//Welcome to parking lot problem//
class Parking{
    car;
    intialCapacity=0;
    constructor(fullCapacity)
    {
        this.fullCapacity=fullCapacity;
    }
    park(car){
        this.car=car;
        this.intialCapacity++;
        return true;
    }
    unPark()
    {
        console.log(this.car);
        this.car=null;
        return true;
    }
    checkLotIsFull()
    {
        if(this.intialCapacity==this.fullCapacity){
            return "capacity is full";
        }else{
            return "capacity is not full";
        }
    }
}
module.exports=Parking;