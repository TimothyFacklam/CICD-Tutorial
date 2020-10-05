export default class TickerController{

    constructor(){
        this.ranged = false
    }

    setRange(min, max){
        this.ranged = true
        this.min = min
        this.max = max
    }

    removeRange(){
        this.ranged = false
    }

    increment(current_val){
        if(this.ranged){
            if(current_val < this.max){
                return current_val + 1;
            }
            else return current_val
        }
        else{
            return current_val + 1;
        }
    }

    decrement(current_val){
        if(this.ranged){
            if(current_val > this.min){
                return current_val - 1;
            }
            else return current_val
        }
        else{
            return current_val - 1;
        }
    }
}

