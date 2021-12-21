
//
//% weight=5 color=#1BAFEA icon="\uf1b2"
namespace sloth {

    export enum PWMChn {
        //% blockId="Right_leg" block="右侧腿"
        Right_Leg = 8,
        //% blockId="Right_Foot" block="右侧脚尖"
        Right_Foot = 9,
        //% blockId="Left_Foot" block="左侧脚尖"
        Left_Foot = 10,
        //% blockId="Left_leg" block="左侧腿"
        Left_Leg = 11,
        CH1 = 0,
        CH2 = 1,
        CH3 = 2,
        CH4 = 3,
        CH5 = 4,
        CH6 = 5,
        CH7 = 10,
        CH8 = 11,
        CH9 = 12,
        CH10 = 13,
        CH11 = 14,
        CH12 = 15
    }

    let right_leg = PWMChn.Right_Leg
    let right_foot = PWMChn.Right_Foot
    let left_foot = PWMChn.Left_Foot
    let left_leg = PWMChn.Left_Leg

    const minPulse = 500
    const maxPulse = 2500
    const PCA9685_ADDRESS = 0x40
    const MODE1 = 0x00
    const MODE2 = 0x01
    const SUBADR1 = 0x02
    const SUBADR2 = 0x03
    const SUBADR3 = 0x04
    const PRESCALE = 0xFE
    const LED0_ON_L = 0x06
    const LED0_ON_H = 0x07
    const LED0_OFF_L = 0x08
    const LED0_OFF_H = 0x09
    const ALL_LED_ON_L = 0xFA
    const ALL_LED_ON_H = 0xFB
    const ALL_LED_OFF_L = 0xFC
    const ALL_LED_OFF_H = 0xFD


    let action_data = [
        [    // walk
            //LL, LF, RL, RF
            [0, 40, 0, 15],
            [-30, 40, -30, 15],
            [-30, 0, -30, 0],

            [0, -15, 0, -40],
            [30, -15, 30, -40],
            [30, 0, 30, 0],
        ],
        [    // walk backward
            //LL, LF, RL, RF
            [0, 40, 0, 20],
            [30, 40, 30, 20],
            [30, 0, 30, 0],

            [0, -20, 0, -40],
            [-30, -20, -30, -40],
            [-30, 0, -30, 0],
        ],
        [   // turn left
            //LL, LF, RL, RF
            [0, 40, 0, 20],
            [0, 40, 20, 20],
            [0, 0, 20, 0],

            [0, -20, 0, -40],
            [0, -20, -20, -40],
            [0, 0, -20, 0],
        ],
        [   // turn right
            //LL, LF, RL, RF
            [0, -20, 0, -40],
            [-20, -20, 0, -40],
            [-20, -20, 0, 0],

            [0, 40, 0, 20],
            [20, 40, 0, 20],
            [20, -20, 0, 0],
        ],
        [   // moon walk left
            [0, 0, 0, -30],
            [0, 30, 0, -60],
            [0, 60, 0, -30],
            [0, 30, 0, 0],
            [0, 0, 0, 0]
        ],
        [   // moon walk right
            [0, 30, 0, 0],
            [0, 60, 0, -30],
            [0, 30, 0, -60],
            [0, 0, 0, -30],
            [0, 0, 0, 0]
        ],
        [   // shake left
            //LL, LF, RL, RF
            [-40, 70, -40, 30],
            [-40, 30, -40, 30],

            [-10, 30, -40, 30],
            [-40, 30, -40, 30],
            [-10, 30, -40, 30],
            [-40, 30, -40, 30],

            [-40, 70, -40, 30],
            [0, 0, 0, 0],
        ],
        [   // shake right
            //LL, LF, RL, RF
            [40, -30, 40, -70],
            [40, -30, 40, -30],

            [40, -30, 10, -30],
            [40, -30, 40, -30],
            [40, -30, 10, -30],
            [40, -30, 40, -30],

            [40, -30, 40, -70],
            [0, 0, 0, 0],
        ],
        [   // go up and down
            [0, 50, 0, -50],
            [0, 0, 0, 0],
        ],
        [   // swing
            [0, -40, 0, 40],
            [0, 0, 0, 0],
        ],
        [    // walk boldly
            //LL, LF, RL, RF
            [-15, -15, 15, -40],
            [10, -30, 40, -40],
            [10, 0, 40, 0],

            [-15, 40, 15, 15],
            [-40, 40, -10, 30],
            [-40, 0, -10, 0],
        ],
        [    // walk backward boldly
            //LL, LF, RL, RF
            [-15, -15, 15, -40],
            [-40, -30, -10, -40],
            [-40, 0, -10, 0],

            [-15, 40, 15, 15],
            [10, 40, 40, 30],
            [10, 0, 40, 0],
        ],
        [    // walk shyly
            //LL, LF, RL, RF
            [10, -15, -10, -40],
            [25, -30, -5, -40],
            [25, 0, -5, 0],

            [10, 40, -10, 15],
            [5, 40, -25, 30],
            [5, 0, -25, 0],
        ],
        [    // walk backward shyly
            //LL, LF, RL, RF
            [10, -15, -10, -40],
            [5, -30, -25, -40],
            [5, 0, -25, 0],

            [10, 40, -10, 15],
            [25, 40, -5, 30],
            [25, 0, -5, 0],
        ],

        [   // big swing
            [0, -90, 0, 90],
            [0, 0, 0, 0],
        ],
    ]

    export enum action_name {
        //% blockId="walk" block="前进"
        walk = 0,
        //% blockId="walk_backward" block="后退"
        walk_backward = 1,
        //% blockId="turn_left" block="左转"
        turn_left = 2,
        //% blockId="turn_right" block="右转"
        turn_right = 3,
        //% blockId="moonwalk_left" block="太空步左转"
        moonwalk_left = 4,
        //% blockId="moonwalk_right" block="太空步右转"
        moonwalk_right = 5,
        //% blockId="shake_left" block="左侧摇摆"
        shake_left = 6,
        //% blockId="shake_right" block="右侧摇摆"
        shake_right = 7,
        //% blockId="go_up_and_down" block="上上下下"
        go_up_and_down = 8,
        //% blockId="swing" block="摇摆不定"
        swing = 9,
        //% blockId="walk_boldly" block="大步前进"
        walk_boldly = 10,
        //% blockId="walk_backward_boldly" block="大步后退"
        walk_backward_boldly = 11,
        //% blockId="walk_shyly" block="细步前进"
        walk_shyly = 12,
        //% blockId="walk_backward_shyly" block="细步后退"
        walk_backward_shyly = 13,
        //% blockId="big_swing" block="大浪潮"
        big_swing = 14
    }

    let initialized = false
    let servos = [left_leg, left_foot, right_leg, right_foot]
    //let servos = [PWMChn.CH0, PWMChn.CH1, PWMChn.CH2, PWMChn.CH3];
    let origin_positions = [90, 90, 90, 90];
    let servo_positions = [0, 0, 0, 0];   // ralative position to home_position
    let offset = [0, 0, 0, 0];

    // variables for calibrate by buttons
    let img_none: Image = null
    let img_upper_left: Image = null
    let img_bottom_left: Image = null
    let img_upper_right: Image = null
    let img_bottom_right: Image = null
    let img_spanner: Image = null

    let left_leg_value = 0
    let left_foot_value = 0
    let right_leg_value = 0
    let right_foot_value = 0

    let servo_number = 1
    let temp_cali_value = 0
    let select_mode_flag = 0

    img_none = images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    img_upper_left = images.createImage(`
        # # . . .
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    img_bottom_left = images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        # # . . .
        `)
    img_upper_right = images.createImage(`
        . . . # #
        . . . # #
        . . . . .
        . . . . .
        . . . . .
        `)
    img_bottom_right = images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . # #
        . . . # #
        `)
    img_spanner = images.createImage(`
        . # . # .
        . # # # .
        . . # . .
        . # # # .
        . # . # .
        `)

    select_mode_flag = 1

    // variables for microphone
    let event_src_mic = 12
    let event_mic_heard = 1

    function i2cwrite(reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(PCA9685_ADDRESS, buf)
    }

    function i2cread(reg: number) {
        pins.i2cWriteNumber(PCA9685_ADDRESS, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(PCA9685_ADDRESS, NumberFormat.UInt8BE);
        return val;
    }

    function init(): void {
        i2cwrite(MODE1, 0x00)
        setFreq(50);
        initialized = true
    }

    function setFreq(freq: number): void {
        // Constrain the frequency
        let prescaleval = 25000000;
        prescaleval /= 4096;
        prescaleval /= freq;
        prescaleval -= 1;
        let prescale = prescaleval; //Math.Floor(prescaleval + 0.5);
        let oldmode = i2cread(MODE1);
        let newmode = (oldmode & 0x7F) | 0x10; // sleep
        i2cwrite(MODE1, newmode); // go to sleep
        i2cwrite(PRESCALE, prescale); // set the prescaler
        i2cwrite(MODE1, oldmode);
        control.waitMicros(5000);
        i2cwrite(MODE1, oldmode | 0xa1);
    }

    /**
     * Set pwm output. Be careful to use this block to your servos,
        right_leg = CH6,
        right_foot = CH7,
        left_foot = CH8,
        left_leg = CH9,
       other channels for DIY
    */
    //% blockId=sloth_set_pwm block="设置PWM通道 %channel|开: %on|关: %off"
    //% advanced=true
    //% weight=20
    //% on.min=0 on.max=4095
    //% off.min=0 off.max=4095
    //% channel.fieldEditor="gridpicker" channel.fieldOptions.columns=4
    export function setPwm(channel: PWMChn, on: number, off: number): void {
        if (!initialized) {
            init()
        }
        if (channel < 0 || channel > 15)
            return;

        let buf = pins.createBuffer(5);
        buf[0] = LED0_ON_L + 4 * channel;
        buf[1] = on & 0xff;
        buf[2] = (on >> 8) & 0xff;
        buf[3] = off & 0xff;
        buf[4] = (off >> 8) & 0xff;
        pins.i2cWriteBuffer(PCA9685_ADDRESS, buf);
    }

    /**
     * Set servo to degree(0~180),
        right_leg = CH6,
        right_foot = CH7,
        left_foot = CH8,
        left_leg = CH9
    */
    //% blockId=sloth_servo_write block="设置舵机 %channel|角度 %degree"
    //% advanced=true
    //% weight=50
    //% degree.min=0 degree.max=180
    //% channel.fieldEditor="gridpicker" channel.fieldOptions.columns=4
    export function servo_write(channel: PWMChn, degree: number): void {
        if (degree < 181 && degree > -1) {
            // 50hz: 20,000 us
            let v_us = (degree * (maxPulse - minPulse) / 180 + minPulse) // 0.5 ~ 2.5
            let value = v_us * 4096 / 20000
            setPwm(channel, 0, value)
        }
    }

    /**
     * Servo move, input 4 elements array, to move all servo
     * @param speed ; eg: 50
    */
    //% blockId=sloth_servo_write_all block="设置所有舵机角度 %angles"
    //% weight=30
    //% advanced=true
    //% angles.min=0 angles.max=180
    export function servo_write_all(angles: number[]): void {
        for (let i = 0; i < servos.length; i++) {
            servo_write(servos[i], origin_positions[i] + angles[i] + offset[i]); // ralative angle to home
        }
    }

    /**
     * Servo move, input 4 elements array, to move all servo
     * @param speed ; eg: 50
    */
    //% blockId=sloth_servo_move block="设置舵机移动到 %target| %speed|dps"
    //% weight=40
    //% advanced=true
    //% speed.min=1 speed.max=100
    export function servo_move(targets: number[], speed: number = 50): void {
        let delta = [0, 0, 0, 0]
        let steps = [0, 0, 0, 0]
        let max_delta = 0

        for (let i = 0; i < delta.length; i++) {
            delta[i] = targets[i] - servo_positions[i];
            let temp = Math.abs(delta[i])
            if (temp > max_delta) {
                max_delta = temp;
            }
        }
        max_delta = 2 * max_delta


        if (max_delta != 0) {
            for (let i = 0; i < delta.length; i++) {
                steps[i] = max_delta / Math.abs(delta[i]);
            }

            for (let i = 0; i < max_delta; i++) {
                for (let j = 0; j <= servos.length; j++) {
                    if (i % steps[j] == 0) {
                        if (servo_positions[j] != targets[j]) {
                            servo_positions[j] = servo_positions[j] + (delta[j] / Math.abs(delta[j]));

                            servo_write_all(servo_positions);
                        }
                    }
                    control.waitMicros((100 - speed) * 10);
                }
            }
        }
    }

    /**
     * Stand still: 4 servos turn to 90 degrees
     */
    //% blockId=sloth_stand_still block="站着"
    //% weight=100 blockGap=10
    export function stand_still(): void {
        let servo_targets = [0, 0, 0, 0];
        servo_move(servo_targets);
    }

    /**
     * Set offset for 4 servos: you can use block "calibrate" on "startup", to get the value to fill in the blank
     */
    //% blockId=sloth_set_offset block="设置偏移量 | 右侧腿 %o3| 左侧腿 %o1| 右侧脚尖 %o4| 左侧脚尖 %o2"
    //% weight=45
    //% o1.min=-30 o1.max=30
    //% o2.min=-30 o2.max=30
    //% o3.min=-30 o3.max=30
    //% o4.min=-30 o4.max=30
    export function set_offset(o3: number, o1: number, o4: number, o2: number): void {
        offset = [o1, o2, o3, o4]
        servo_positions = [0, 0, 0, 0];
        servo_write_all(servo_positions);
    }

    /**
     * Set gesture for sloth:bit: fill in the blank to drive servo turn the angle and show gesture for you. This block 
     * is just for advance, pay attention to set value, and provide blocking protection to the servos
     */
    //% blockId=sloth_set_gesture block="设置姿态 | 左侧腿 %o1| 左侧脚尖 %o2| 右侧腿 %o3| 右侧脚尖 %o4"
    //% o1.min=-90 o1.max=90
    //% o2.min=-90 o2.max=90
    //% o3.min=-90 o3.max=90
    //% o4.min=-90 o4.max=90
    //% advanced=true
    //% weight = 96
    export function set_gesture(o1: number, o2: number, o3: number, o4: number): void {
        let servo_targets = [o1, o2, o3, o4]
        servo_move(servo_targets, 50);
    }

    /**
     * Actions.
     */
    //% blockId=sloth_actions block="%action"
    //% weight=98
    //% advanced=true
    //% action.fieldEditor="gridpicker" action.fieldOptions.columns=2
    export function actions(action: action_name): number {
        return action
    }

    /**
     * Do an action step times in speed.
     * @param step ; eg: 1
     * @param speed ; eg: 50
     */
    //% blockId=sloth_do_action block="%action=sloth_actions|%step|步数 %speed|速度"
    //% weight=98 blockGap=50
    //% speed.min=1 speed.max=100
    export function do_action(action: number, step: number = 1, speed: number = 50): void {
        for (let i = 0; i < step; i++) {
            for (let data of action_data[action]) {
                servo_move(data, speed);
            }
        }
        // stand_still()
    }

    function select_servo() {   // select_mode_flag == 1
        if (servo_number == 1) {
            img_upper_left.showImage(0)
            basic.pause(100)
            img_none.showImage(0)
            basic.pause(100)
            temp_cali_value = right_leg_value
        } else if (servo_number == 2) {
            img_upper_right.showImage(0)
            basic.pause(100)
            img_none.showImage(0)
            basic.pause(100)
            temp_cali_value = left_leg_value
        } else if (servo_number == 3) {
            img_bottom_left.showImage(0)
            basic.pause(100)
            img_none.showImage(0)
            basic.pause(100)
            temp_cali_value = right_foot_value
        } else if (servo_number == 4) {
            img_bottom_right.showImage(0)
            basic.pause(100)
            img_none.showImage(0)
            basic.pause(100)
            temp_cali_value = left_foot_value
        }
    }

    function cali_value() {    //  select_mode_flag == 2
        if (servo_number == 1) {
            right_leg_value = temp_cali_value
            //sloth.servo_write(servos[2], 90 + right_leg_value)
        } else if (servo_number == 2) {
            left_leg_value = temp_cali_value
            //sloth.servo_write(servos[0], 90 + left_leg_value)
        } else if (servo_number == 3) {
            right_foot_value = temp_cali_value
            //sloth.servo_write(servos[3], 90 + right_foot_value)
        } else if (servo_number == 4) {
            left_foot_value = temp_cali_value
            //sloth.servo_write(servos[1], 90 + left_foot_value)
        }
        sloth.set_offset(
            right_leg_value,
            left_leg_value,
            right_foot_value,
            left_foot_value
        )
        basic.pause(10)
        //basic.showNumber(temp_cali_value)
    }

    function show_cali_value() {    //  select_mode_flag == 3
        if (servo_number == 1) {
            img_upper_left.showImage(0)
            basic.pause(100)
            img_none.showImage(0)
            basic.pause(100)
            basic.showNumber(right_leg_value)
            basic.pause(100)
        } else if (servo_number == 2) {
            img_upper_right.showImage(0)
            basic.pause(100)
            img_none.showImage(0)
            basic.pause(100)
            basic.showNumber(left_leg_value)
            basic.pause(100)
        } else if (servo_number == 3) {
            img_bottom_left.showImage(0)
            basic.pause(100)
            img_none.showImage(0)
            basic.pause(100)
            basic.showNumber(right_foot_value)
            basic.pause(100)
        } else if (servo_number == 4) {
            img_bottom_right.showImage(0)
            basic.pause(100)
            img_none.showImage(0)
            basic.pause(100)
            basic.showNumber(left_foot_value)
            basic.pause(100)
        }
    }


    /**
     * Calibrate 4 servos by buttonA, buttonB, and A+B.
     */
    //% blockId=sloth_cali_by_button block="校正"
    //% weight=45 blockGap=10
    export function cali_by_button(): void {
        basic.showString("Cali")//brate 4 servos by button A, B & A+B")

        input.onButtonPressed(Button.A, () => {
            if (select_mode_flag == 1) {
                servo_number += -1
                if (servo_number < 1) {
                    servo_number = 4
                }
            }
            else if (select_mode_flag == 2) {
                temp_cali_value += -1
            }
            else if (select_mode_flag == 3) {
                select_mode_flag = 1
            }
        })

        input.onButtonPressed(Button.B, () => {
            if (select_mode_flag == 1) {
                servo_number += 1
                if (servo_number > 4) {
                    servo_number = 1
                }
            }
            else if (select_mode_flag == 2) {
                temp_cali_value += 1
            }
            else if (select_mode_flag == 3) {
                select_mode_flag = 1
            }
        })

        input.onButtonPressed(Button.AB, () => {
            if (select_mode_flag == 1) {  // confirm the current servo select
                select_mode_flag = 2
            }
            else if (select_mode_flag == 2) {  // confirm the current servo cali
                select_mode_flag = 3
            }
            else if (select_mode_flag == 3) {  // return to the servo select
                select_mode_flag = 1
                //servo_number += 1
                //if (servo_number > 4) {
                //    servo_number = 1
                //}
            }
        })

        basic.forever(() => {
            if (select_mode_flag == 1) {
                select_servo()
            }
            else if (select_mode_flag == 2) {
                img_spanner.showImage(0)
                cali_value()
            }
            else if (select_mode_flag == 3) {
                show_cali_value()
            }
        })

    }


    /**
     * Volume of the mic get.
     */
    //% blockId=sloth_volume_of_heard block="获取声音传感器值"
    //% weight=65 blockGap=10
    export function volume_of_heard(): number {
        let volume: number = 0
        //for (let i = 0; i < 20; i++) {
        volume = pins.analogReadPin(AnalogPin.P2)// + volume
        //}
        volume = 1023 - volume// / 20
        return volume
    }


    function mic_init(threshold: number) {
        control.inBackground(() => {
            let flag = false
            let last_flag = false
            while (true) {
                let value = sloth.volume_of_heard()
                if (value > threshold) {
                    flag = true
                } else {
                    flag = false
                }
                if (flag != last_flag) {
                    if (flag) {
                        control.raiseEvent(event_src_mic, event_mic_heard)
                        basic.pause(300)
                    }
                    last_flag = flag
                }
                basic.pause(1)
            }
        })
    }
    /**
     * The event mic get voice more then the threshold.
     * @param threshold ; eg: 550
     */
    //% blockId=sloth_mic_get_voice block="当听到声音时 |%threshold"
    //% threshold.min=0 threshold.max=1023
    //% weight=70 blockGap=10
    export function onHeard(threshold: number = 550, handler: Action) {
        mic_init(threshold);
        control.onEvent(event_src_mic, event_mic_heard, handler); // register handler
    }

    /*
    function is_get_voice(threshold: number = 1): boolean {

        let volume: number = volume_of_heard()
        if (volume > threshold)
            return true
        else
            return false
    }*/

    /**
     * IR detect obstacle: IR on digital pin 12, when detected, pin 12 is low
     **/
    //% blockId=sloth_IR_detect_obstacle block="当检测到障碍物时"
    //% weight=55 blockGap=50
    export function obstacle_detected(): boolean {
        if (pins.digitalReadPin(DigitalPin.P12) == 0)
            return true
        else
            return false
    }

    /**
     * servo sweep
     **/
    //% blockId=sloth_servo_sweep block="扫描舵机"
    //% weight=55
    export function servo_sweep(): void {
        let item = -90
        for (let i = 0; i < 181; i++) {
            sloth.servo_write_all([item, item, item, item])
            item = item + 1
            basic.pause(10)
        }
        for (let i = 0; i < 181; i++) {
            sloth.servo_write_all([item, item, item, item])
            item = item - 1
            basic.pause(10)
        }
    }
}
