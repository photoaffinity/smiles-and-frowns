let Smiles = 0
let Frowns = 0
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . . # .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . . # . .
        . . # . .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . # . . #
        . # . . .
        . # . . #
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # . . # .
        # . . . .
        # . . # .
        . # . . .
        `)
    basic.showLeds(`
        # . . . #
        . . # . .
        . . . . #
        . . # . .
        # . . . #
        `)
    basic.showLeds(`
        . . . # #
        . # . . .
        . . . # #
        . # . . .
        . . . # #
        `)
    basic.showLeds(`
        . . # # #
        # . . . .
        . . # # #
        # . . . .
        . . # # #
        `)
    basic.showLeds(`
        . # # # #
        . . . . .
        . # # # #
        . . . . .
        . # # # #
        `)
    basic.showLeds(`
        # # # # .
        . . . . .
        # # # # .
        . . . . .
        # # # # .
        `)
    basic.showLeds(`
        # # # . .
        . . . . .
        # # # . .
        . . . . .
        # # # . .
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        # # . . .
        . . . . .
        # # . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("" + (Smiles))
    Smiles += 1
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . # . .
        # . . . .
        # . # . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . # .
        . # . . .
        . # . # .
        # . . . .
        `)
    basic.showLeds(`
        . # . . .
        . . # . #
        . . # . .
        . . # . #
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . # .
        . . . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . #
        . . . . #
        . . . . #
        . . . # .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("" + (Frowns))
    Frowns += 1
})
