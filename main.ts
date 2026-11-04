let plaza_3 = 0
let plaza_2 = 0
let plaza_1 = 0
OLED.init(128, 64)
OLED.clear()
basic.forever(function () {
    plaza_1 = pins.digitalReadPin(DigitalPin.P0)
    plaza_2 = pins.digitalReadPin(DigitalPin.P1)
    plaza_3 = pins.digitalReadPin(DigitalPin.P2)
})
basic.forever(function () {
    if (plaza_1 == 0 && (plaza_2 == 0 && plaza_3 == 0)) {
        OLED.clear()
        OLED.writeStringNewLine("x")
        OLED.writeStringNewLine("Parking lleno")
        basic.showIcon(IconNames.No)
        basic.pause(500)
    } else {
        OLED.clear()
        OLED.writeStringNewLine("OK")
        OLED.writeStringNewLine("Parking libre")
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
    }
})
