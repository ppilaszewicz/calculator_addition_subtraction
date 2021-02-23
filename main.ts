input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    number_2 = number + number_2
    number = 0
    basic.showNumber(number_2)
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
let number_2 = 0
let number = 0
number = 0
basic.showNumber(number)
number_2 = 0
basic.forever(function () {
	
})
