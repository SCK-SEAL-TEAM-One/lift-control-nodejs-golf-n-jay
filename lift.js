// export default class Lift {
module.exports = class Lift {
    constructor (currentfloor = 1, maxweight= 1000 ) {

        this.currentfloor = currentfloor
        this.maxweight = maxweight
        this.status = "stop"
    }

        isOverload (weight){
            return weight > this.maxweight 
        }

        setStatus(status) {
            this.status = status
        }

        move(weight, targetfloor){
            if (this.isOverload(weight)) {
                return this.setStatus("stop")
            } 

            if(this.currentfloor == targetfloor){
                return this.setStatus("stop")
            }else if(this.currentfloor < targetfloor){
                return this.setStatus("up")
            }else{
                return this.setStatus("down")
            }
        }

        showStatus() {
            return this.status
        }
}

