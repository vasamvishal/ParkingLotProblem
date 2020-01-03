
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
            console.log(this.array[i],"Have been notified");
        }
    }

    notifyOwner()
    {
        console.log("Space is available again");
    }

}
module.exports=new ObserverPattern();