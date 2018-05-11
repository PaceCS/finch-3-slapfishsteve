"use strict";

load("readline.js");
load("Finch.js");

// Gain access to our finch
var finch = new Finch();

// -----------------------------------------------
// Don't change anything above the line

// Our first set of code will make the Finch move forward w/ a power of 100 in each wheel for 1 second then move backwards with the same power
// finch.setWheelPower(100, 100);
// wait(1000);
// finch.setWheelPower(-100, -100);
// wait(1000);
// finch.setWheelPower(0, 0);

// Have the Finch repeat the motion of moving back and forth 3 more times
for (var counter = 0; counter < 3; counter += 1) {
    finch.setWheelPower(100, 100);
    wait(1000);
    finch.setWheelPower(-100, -100);
    wait(1000);
    finch.setWheelPower(0, 0);
}

// Now make the Finch turn to the right for half a second
finch.setWheelPower(60, 0);
wait(500);
finch.setWheelPower(0, 0);
wait(500);
// // Now make the Finch turn to the left for half a second
finch.setWheelPower(0, 60);
wait(500);
finch.setWheelPower(0, 0);
wait(500);
// // // Now make the Finch turn to the right for half a second but make it turn more quickly than before
finch.setWheelPower(100, 0);
wait(500);
finch.setWheelPower(0, 0);
wait(500);
// // // Now make the Finch turn to the left for half a second but make it turn more quickly than before
finch.setWheelPower(0, 100);
wait(500);
finch.setWheelPower(0, 0);
wait(500);
// Now create a maze with at least two turns and have the Finch follow that path

finch.setWheelPower(100, 100);
wait(3000);
finch.setWheelPower(0, 0);
wait(500);
finch.setWheelPower(0, 100);
wait(700);
finch.setWheelPower(100, 100);
wait(3000);
finch.setWheelPower(100, 0);
wait(800);
finch.setWheelPower(0, 0);
wait(500);
finch.setWheelPower(100, 100);
wait(1000);

function wait(msecs, buffer) {
    var buf = buffer ? buffer : 100;
    var time1 = new Date().getTime();
    var time2 = new Date().getTime();
    while (time2 < time1 + msecs + buf) {
        time2 = new Date().getTime();
    }
}
