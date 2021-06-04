// Объявить две целочисленные переменные — a и b и задать им произвольные начальные
// значения. Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность;
// - если а и b отрицательные, вывести их произведение;
// - если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом.

const MAX = 100, MIN = -100

function getValue() {
    return Math.round(Math.random() * (MAX - MIN) + MIN)
}

let a = getValue()
let b = getValue()

console.log('a =', a)
console.log('b =', b)

if (a >= 0) {
    b >= 0 ? console.log('a - b =', a - b) : console.log('a + b =', a + b)
}
else {
    b < 0 ? console.log('a * b =', a * b) : console.log('a + b =', a + b)
}
