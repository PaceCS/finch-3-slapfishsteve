# Finch Move

You will be experimenting with moving the Finch robot around.  

### Understanding Finch Movement
The Finch moves by applying power to its wheels.  This is done using `finch.setWheelPower(left, right)` where `left` and `right` represent power to their respective wheels.  This power can be a number from -255 to 255 where negative power corresponds to the wheel going backwards.

### Coding the Finch
You will be experimenting with some code to create different motion.

1. **Back and Forth** - Have the Finch move forward for 1 second then backwards for 1 second then stop.

```
finch.setWheelPower(100, 100);
wait(1000);
finch.setWheelPower(-100, -100);
wait(1000);
finch.setWheelPower(0, 0);
```

3. **Back and Forth pt. 2** - Change the values around for the Finch's back and forth motion.


2. **Circles** - Have the Finch turn left and right by applying power only to one wheel.


3. **Maze Runner** - Create a maze and have the Finch successfully navigate it.
