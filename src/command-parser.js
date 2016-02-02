/**
 * Created by vivek on 2/1/2016.
 */

import {ACTIONS} from './constants';

function CommandParser(cmd){
    var commandInfo ={args:{}};
    cmd =cmd.trim();

    if(cmd.indexOf(' ') === -1 && cmd.length < 100){
        commandInfo.action = ACTIONS.MOVE_ROBOT;
        commandInfo.args.moves = cmd.split('');
        return commandInfo;
    }

    if(cmd.indexOf(' ') > -1 && cmd.length === 3){
        commandInfo.action = ACTIONS.CREATE_ROBOT_HOUSE;
        const coords = cmd.split(' ');
        commandInfo.args.x = coords[0];
        commandInfo.args.y = coords[1];
        return commandInfo;
    }

    if(cmd.indexOf(' ') > -1 && cmd.length === 5){
        commandInfo.action = ACTIONS.MOVE_ROBOT;
        commandInfo.args.x = coords[0];
        commandInfo.args.y = coords[1];
        commandInfo.args.orientation = coords[2];
        return commandInfo;
    }

    return commandInfo.error = 'invalid command';
}

export {
    CommandParser
}
