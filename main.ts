let temperature = 0
let pression = 0
let humidite = 0
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
basic.forever(function () {
    humidite = envirobit.getHumidity()
    pression = envirobit.getPressure()
    temperature = envirobit.getTemperature()
    radio.sendString("H=" + humidite + "P=" + pression + "T=" + temperature)
    basic.showString("H=" + humidite + "P=" + pression + "T=" + temperature)
})
