
class ParkingOwner{
    get isFull() {
        return this._isFull;
    }

    parkinglotIsFull() {
        this._isFull = true;
        console.log(this.isFull);
    }
}module.exports=ParkingOwner;