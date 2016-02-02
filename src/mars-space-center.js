/**
 * Created by vivek on 2/1/2016.
 */

import {CommandParser} from './command-parser';
import {ACTIONS} from './constants';
import {RobotHouse} from './robot-house';

class MarsSpaceCenter{

    constructor(){
        this.robotHouse = null;
    }

    executeCommand(cmd) {
        var returnSignal ={error:'', position: ''};
        const commandInfo = CommandParser(cmd);
        if(commandInfo.error)
           return returnSignal.error = commandInfo.error;

        switch(commandInfo.action){
            case ACTIONS.CREATE_ROBOT_HOUSE:
                this.robotHouse = new RobotHouse(commandInfo.args.x, commandInfo.args.y);
                break;
            case ACTIONS.DEPLOY_ROBOT:
                this.robotHouse.deployRobot(commandInfo.args.x, commandInfo.args.y, commandInfo.args.orientation);
                break;
            case ACTIONS.MOVE_ROBOT:
                const movsLength = commandInfo.args.moves;
                for(let i=0; i < movsLength ;i++) {
                    const newPosition = this.robotHouse.moveRobot(commandInfo.args.moves[i]);
                }
                break;
        }
    }
}

export {
    MarsSpaceCenter
}
