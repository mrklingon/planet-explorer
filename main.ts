function shoMT (xnum: number, HT: number) {
    for (let index2 = 0; index2 <= 4; index2++) {
        led.plotBrightness(xnum, 5 - index2, 0)
    }
    for (let index2 = 0; index2 <= HT; index2++) {
        led.plotBrightness(xnum, 5 - index2, 130)
    }
}
function BuildLandscape (mts: number) {
    MtList = []
    for (let index = 0; index < mts; index++) {
        MtList.push(randint(0, 4))
    }
}
input.onButtonPressed(Button.A, function () {
    led.unplot(0, shipy)
    shipy += -1
    if (shipy < 0) {
        shipy = 0
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(0, shipy)
    shipy += 1
    if (shipy > 4) {
        shipy = 4
    }
})
function showLand () {
    for (let index = 0; index <= 4; index++) {
        shoMT(index, MtList[index])
    }
    mt = MtList.shift()
    MtList.push(mt)
}
let mt = 0
let MtList: number[] = []
let shipy = 0
BuildLandscape(100)
game.setLife(5)
let speed = 1
shipy = 0
basic.forever(function () {
    showLand()
    led.plot(0, shipy)
    basic.pause(200 / speed)
})
