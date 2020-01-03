
class ObserverPattern {

    constructor() {
        this.array=[];
    }
    subscribe(Object)
    {
        this.array.push(Object);
    }
    notify()
    {
        for( let i=0; i< this.array.length;i++)
        {
             this.array[i].parkinglotIsFull();
        }
    }

    notifyOwner()
    {
        let result=this.array.pop();
        console.log(result,"Space is available again");
    }

}
module.exports=new ObserverPattern();