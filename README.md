# Finch Sound

You will be experimenting with sound using the Finch robot.  

### Understanding Sound
Different notes are associated with different frequencies of sound.  The higher the frequency, the higher the pitch.  The lower the frequency, the lower the pitch.  

### Coding the Finch
You will be experimenting with some code to create three different effects.

1. **Tone Swap** - Have the Finch play one tone for a second then switch to the second tone.  The code for this segment is below.  The sample code first plays the tone A4 (440 Hz) then plays the tone A3 (220 Hz).  Try changing the values to see what different tones the Finch can produce.

```
finch.playTone(440, 1000);
wait(1000);
finch.playTone(220, 1000);
wait(1000);
```

2. **Play Song** - Have the Finch go play the song in the array **arr**. The timing is given by the array **time**.

3. **Sound & Light Show** - Create your own custom light show, but this time add sound to it.
