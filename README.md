# D:bit
This library provides a driver for Dbit:bit from CLB

## Basic usage

```blocks  

// Set the calibration value to servos of Dbit:bit  
// the arguments are (Right Leg, Left Leg, Right Foot, Left Foot)  
Dbit.set_offset(0, 0, 0, 0)

// Dbit:bit stand still  
Dbit.stand_still()  

// Dbit:bit do an action step times in speed  
// action is a member of Dbit.action_name  
Dbit.do_action(Dbit.actions(Dbit.action_name.walk), 1, 50);
```

Use ``||Dbit.do_action||`` to do an action.  
Use ``||Dbit.actions||`` to get actions build-in.  
Use ``||Dbit.stand_still||`` to stand still.  
Use ``||Dbit.set_offset||`` to set offset for stand still.  
Use ``||Dbit.cali_by_button||`` on start to calibrate the servos, and get value for offset on LED screen.  

### Sensors  

Use ``||Dbit.volume_of_heard||`` to return volume of sound sensor get.  
Use ``||Dbit.obstacle_detected||``, if IR sensor get signal, return ture.   
Use ``||Dbit.onHeard||``, event Dbit:bit heard the sound whitch volume over threshold.    

## Examples:
### Dbit:bit do actions

This little program will let the Dbit:bit do actions.
The Dbit:bit show a number and then do action, it will do all actions build-in, each action for twice.

```blocks
basic.forever(() => {
    for (let index = 0; index <= Dbit.actions(Dbit.action_name.walk_backward_shily); index++) {
        basic.showNumber(index)
        Dbit.do_action(index, 2, 50)
    }
})
})
```

### Calibrate Dbit:bit

If stand still position not correct, just call ``Dbit.cali_by_button()`` on start.

```blocks
Dbit.cali_by_button()
```


### Dbit:bit walk with obstacle avoided

Walk forward, obstacle detected, turn left.

```blocks
basic.forever(() => {
    if (Dbit.obstacle_detected()) {
        Dbit.do_action(Dbit.actions(Dbit.action_name.turn_left), 2, 50)
    } else {
        Dbit.do_action(Dbit.actions(Dbit.action_name.walk), 1, 50)
    }
})
```  

### Dbit:bit walk when sound heard

When heard sound over 550, Dbit:bit walk.

```blocks
Dbit.onHeard(550, () => {
    basic.showIcon(IconNames.Surprised)
    Dbit.do_action(Dbit.actions(Dbit.action_name.swing), 1, 50)
    Dbit.stand_still()
})
basic.forever(() => {
    basic.showIcon(IconNames.Asleep)
})

```

## Supported targets

* for PXT/microbit


## License

MIT


