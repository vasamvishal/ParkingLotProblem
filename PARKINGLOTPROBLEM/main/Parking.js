//Welcome to parking lot problem//
let ObserverPattern=require("./ObserverPattern");
class Parking {
    intialCapacity = 0;
    capacity;
    capacityArray = [];

    constructor(capacity) {
        this.capacity = capacity;
    }

    park = (car,observer) => {
        for(let i=0;i<this.capacityArray.length;i++)
        {
            if(this.capacityArray[i] === car)
            {
               throw new Error("Same car cannot be entered");
            }
        }
        const isLotFull = this.#checkLotIsFull(this.capacityArray, this.capacity);
        if (isLotFull === false) {
            if (this.capacityArray.length <= this.capacity) {
                console.log(this.capacityArray.length);
                this.capacityArray.push(car);
                this.intialCapacity++;
                return false;
            }
        } else {
            ObserverPattern.subscribe(observer);
            ObserverPattern.notify();
            return true;
        }
    };
    unPark = () => {
        const isLotFull = this.#checkLotIsFull(this.capacityArray, this.capacity);
        if(isLotFull=== true) {
            this.capacityArray.pop();
            ObserverPattern.notifyOwner();
            return isLotFull;
        }
        else {
            this.capacityArray.pop();
            return (!isLotFull) ;
        }
    };

    #checkLotIsFull = (capacityArray, capacity,observer) => {
        let isFull = true;
        console.log(capacityArray.length);
        if (capacityArray.length === capacity) {
            return isFull;
        } else {
            isFull = false;
            return isFull;
        }
    };
}

module.exports = Parking;