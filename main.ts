let X_value = 0
let Y_value = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(X_value, Y_value)
            basic.pause(500)
            X_value += 1
        }
        X_value = 0
        Y_value += 1
    }
})
input.onButtonPressed(Button.B, function () {
    Y_value = 0
    X_value = 0
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(X_value, Y_value)
            basic.pause(500)
            X_value += 1
        }
        Y_value += 1
        X_value = 5
        for (let index = 0; index < 5; index++) {
            X_value += -1
            led.plot(X_value, Y_value)
            basic.pause(500)
        }
        Y_value += 1
    }
    X_value = 0
    for (let index = 0; index < 5; index++) {
        led.plot(X_value, Y_value)
        basic.pause(500)
        X_value += 1
    }
})
