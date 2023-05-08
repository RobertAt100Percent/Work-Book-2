// initialize and declare all needed variables
var x1,x2,y1,y2,Destination,CurrentPosition;
var DestinationX = 2, DestinationY = 3, CurrentPositionX = 5,CurrentPositionY = 9;
var formulaForX = CurrentPositionX - DestinationX, formulaForY = CurrentPositionY - DestinationY;
//display to the console
console.log("Your current postion is : " + CurrentPositionX +","+CurrentPositionY+
 "\nThe postion of the distance is " + DestinationX + "," + DestinationY + 
 "\nThe distance between these coordiantes is " + formulaForX + "," + formulaForY);