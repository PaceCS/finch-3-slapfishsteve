"use strict";

load("readline.js");
load("Finch.js");

// Gain access to our finch
var finch = new Finch();

// -----------------------------------------------
// Don't change anything above the line

// Our first set of code will make the Finch move forward w/ a power of 100 in each wheel for 1 second then move backwards with the same power
finch.setWheelPower(100, 100);
wait(1000);
finch.setWheelPower(-100, -100);
wait(1000);
finch.setWheelPower(0, 0);

// Now make the Finch turn to the right for half a second


// Now make the Finch turn to the left for half a second


// We will now have the Finch move back and forth until something is put in front of it to set off its obstacle sensors
while (!finch.getObstacleSensors().left && !finch.getObstacleSensors().right) {
    finch.setWheelPower(100, 100);
    wait(1000);
    finch.setWheelPower(-100, -100);
    wait(1000);
    finch.setWheelPower(0, 0);
}

// We will now have the Finch move back and forth until something is put in front of it to set off its obstacle sensors
while (finch.getLightSensors().left < 150 && finch.getLightSensors().right < 150) {
    finch.setWheelPower(30, 0);
    wait(1000);
    finch.setWheelPower(0, -30);
    wait(1000);
    finch.setWheelPower(0, 0);
}

function wait(msecs, buffer) {
    var buf = buffer ? buffer : 100;
    var time1 = new Date().getTime();
    var time2 = new Date().getTime();
    while (time2 < time1 + msecs + buf) {
        time2 = new Date().getTime();
    }
}
