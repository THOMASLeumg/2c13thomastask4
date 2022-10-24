let X_value = 0
let Y_value = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(X_value, 0)
        basic.pause(500)
        X_value += 1
    }
    if (X_value > 4) {
        basic.clearScreen()
        X_value = 0
        led.plot(X_value, 0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, Y_value)
        basic.pause(500)
        Y_value += 1
    }
    if (Y_value > 4) {
        basic.clearScreen()
        Y_value = 0
        led.plot(0, Y_value)
    }
})
