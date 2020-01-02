//Welcome to parking lot problem//
class Parking{
    car;
    park(car){
        this.car=car;
        return true;
    }
    unPark()
    {
        console.log(this.car);
        this.car=null;
        return true;
    }
}
module.exports=Parking;