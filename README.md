# mars-space-center
this is a demo project created for some experimentation

Idea is to have Mars-space-center class instance which will receive communications from earth (in this case a textbox)

mars-space-center will validate the recieved signal and creates a Robot-house class instance which is responsible for deploying and tracking robots.

Robot house will keep track of all the robots that were created even if the Robot status is lost. Robot house will have a list of coordinates where it's robots were found just before them getting lost.

Robot house will have one active robot at any given point of time. It will be moved according to the commands it receive. Before a new Robot is deployed, current active robot will be suspended.

From earth (textbox) we should be able to send signals to create a new RobotHouse anytime we want. Also we should be able to control current active robot in the robot house. 
