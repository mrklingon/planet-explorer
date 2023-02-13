function shoMT (xnum: number, HT: number) {
    for (let index2 = 0; index2 <= 4; index2++) {
        led.plotBrightness(xnum, 5 - index2, 0)
    }
    if (HT >= 0) {
        for (let index2 = 0; index2 <= HT; index2++) {
            led.plotBrightness(xnum, 5 - index2, 100)
        }
    } else {
        height = Math.abs(HT)
        for (let index2 = 0; index2 <= height; index2++) {
            led.plotBrightness(xnum, 5 - index2, 255)
        }
    }
}
function BuildLandscape (mts: number) {
    MtList = []
    for (let index = 0; index < mts; index++) {
        if (8 < randint(0, 10)) {
            MtList.push(randint(-4, 4))
        } else {
            MtList.push(randint(0, 4))
        }
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
let height = 0
let shipy = 0
images.createBigImage(`
    . . . . . . . . # #
    . . . . . # # # . .
    . . # . . . . . # #
    . . # # . . . . . .
    # # # # . # . . . .
    `).scrollImage(1, 200)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . # . . . . #
    . . . # # . . # . #
    # # # # # # # # # #
    `).scrollImage(1, 200)
BuildLandscape(100)
let click = 0
game.setLife(5)
let speed = 1
shipy = 0
basic.forever(function () {
    showLand()
    click += 1
    if (100 <= click) {
        speed += 0.25
        click = 0
    }
    if (led.pointBrightness(0, shipy) == 100) {
        game.removeLife(1)
        shipy = 0
    }
    if (led.pointBrightness(0, shipy) == 255) {
        shipy = 0
        game.addLife(1)
        game.addScore(randint(10, 50))
    }
    led.plotBrightness(0, shipy, 200)
    basic.pause(200 / speed)
})
