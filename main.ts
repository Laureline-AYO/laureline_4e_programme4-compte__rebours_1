let nbre_depart = 10
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        while (nbre_depart >= 0) {
            basic.showNumber(nbre_depart)
            basic.pause(1000)
            nbre_depart += -1
        }
    }
})
