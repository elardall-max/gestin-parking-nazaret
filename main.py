plaza_1 = 0
plaza_2 = 0
plaza_3 = 0

def on_forever():
    global plaza_1, plaza_2, plaza_3
    plaza_1 = pins.digital_read_pin(DigitalPin.P0)
    plaza_2 = pins.digital_read_pin(DigitalPin.P1)
    plaza_3 = pins.digital_read_pin(DigitalPin.P2)
basic.forever(on_forever)

def on_forever2():
    if plaza_1 == 0 and (plaza_2 == 0 and plaza_3 == 0):
        pins.digital_write_pin(DigitalPin.P8, 1)
        pins.digital_write_pin(DigitalPin.P12, 0)
        basic.show_icon(IconNames.NO)
    else:
        pins.digital_write_pin(DigitalPin.P8, 0)
        pins.digital_write_pin(DigitalPin.P12, 1)
        basic.show_icon(IconNames.YES)
basic.forever(on_forever2)
