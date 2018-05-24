// export default class Lift {
module.exports = class LiftV2 {
    constructor(currentfloor = 1, maxweight = 1000, ground = 1, top = 17) {

        this.currentfloor = currentfloor
        this.maxweight = maxweight
        this.status = "stop"
        this.groundFloor = ground
        this.topFloor = top        
    }

    alert() {
        console.log( "Overload ,Max capacity is"+ this.maxweight +"kgs" )
    }


    isOverload(weight) {
        return weight > this.maxweight
    }

    setMoveStatus(status) {
        this.status = status
        console.log(this.showStatus())
    }
    
    run(weight, targetfloor) {
        if (this.isOverload(weight)) {
            this.alert()
            return this.stop()
        }
        while (this.currentfloor != targetfloor) {
            this.move(targetfloor);
        }
        this.setMoveStatus("stop")
    }

    showStatus() {
        return "current" + this.currentfloor + " direction: " + this.status
    }

    move(targetfloor) {
        if (this.currentfloor == targetfloor) {
            return this.stop()
        } else if (this.currentfloor < targetfloor) {
            return this.moveUp(targetfloor)
        } else {
            return this.moveDown(targetfloor)
        }
    }

    stop(){
        this.setMoveStatus("stop") 
    }

    moveUp(targetfloor) {
        this.setMoveStatus("up")
        this.currentfloor++
        
    }

    moveDown(targetfloor) {
        this.setMoveStatus("down")
        this.currentfloor--
    }

    moveUntilMatchTargetFloor(targetfloor, callbackFn) {
        while (this.currentfloor != targetfloor) {
            callbackFn()
        }
        this.setMoveStatus("stop")
    }
}