// export default class Lift {
module.exports = class LiftV2 {
    constructor(currentfloor = 1, maxweight = 1000) {

        this.currentfloor = currentfloor
        this.maxweight = maxweight
        this.status = "stop"
        
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

    move(weight, targetfloor) {
        if (this.isOverload(weight)) {
            this.alert()
            this.setMoveStatus("stop")
            return 
        }

        this.setDirection(targetfloor)
    }

    showStatus() {
        return "current" + this.currentfloor + " direction: " + this.status
    }

    setDirection(targetfloor) {
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
        this.moveUntilMatchTargetFloor(targetfloor, () => {
            this.setMoveStatus("up")
            this.currentfloor++;
        })
        // while (this.currentfloor != targetfloor) {
        //     this.setMoveStatus("up")
        //     this.currentfloor++;
        // }
        // this.setMoveStatus("stop")
    }

    moveDown(targetfloor) {
        this.moveUntilMatchTargetFloor(targetfloor, () => {
            this.setMoveStatus("down")
            this.currentfloor--;
        })
        // while (this.currentfloor != targetfloor) {
        //     this.setMoveStatus("down")
        //     this.currentfloor--;
        // }
        // this.setMoveStatus("stop")
    }

    moveUntilMatchTargetFloor(targetfloor, callbackFn) {
        while (this.currentfloor != targetfloor) {
            callbackFn();
        }
        this.setMoveStatus("stop")
    }
}