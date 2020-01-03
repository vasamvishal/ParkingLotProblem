

class AirportSecurity{
    _isFull;
    get isFull() {
        return this._isFull;
    }
    parkinglotIsFull() {
        this._isFull = true
            console.log("Owner:Parking lot is full");
        }
}module.exports=AirportSecurity;