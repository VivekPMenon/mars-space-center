/**
 * Created by vivek on 2/1/2016.
 */

'use strict';

class RobotHouse{

    constructor(x, y){
        this.robots =[];
        this.scents =[];
        this.activeRobot = null;
        this.boundary = {x:x,y:y};
    }

    deployRobot(x, y, orientation){
        this.activeRobot = {x:x, y:y, orientation:o};
    }

    moveRobot(cmd){
        if(cmd === 'F'){
            //if(this.activeRobot.orientation )TODO

        }
        else
          this.activeRobot.orientation =  this.getOrientation(this.activeRobot.orientation, cmd);

        this.activeRobot.isLost = this.isRobotLost(this.activeRobot.x, this.activeRobot.y);
    }

    suspendRobot(){
        this.robots.push(this.activeRobot);
        this.activeRobot = {};
    }

    isRobotLost(x, y){
        return x > this.boundary.x || x < 0 || y > this.boundary.y || y < 0;
    }

    getOrientation(currentOrientation, direction){//Revisit the logic to minimize code
        const orientations = ['E', 'S', 'W', 'N'];
        const offset = direction === 'R' ? 1: -1;
        const currentPos = orientations.indexOf(currentOrientation);
        var newPos = currentPos + offset;
        newPos = newPos === -1 ? 3: (newPos === 4? 0: newPos);
        return orientations[newPos];
    }
}

export {
    RobotHouse
}