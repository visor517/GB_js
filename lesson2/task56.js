// 5. Реализовать четыре основные арифметические операции в виде функций с двумя
// параметрами. Обязательно использовать оператор return.

const MAX = 10, MIN = -10

function getValue() {
    return Math.round(Math.random() * (MAX - MIN) + MIN)
}

let a = getValue()
let b = getValue()

console.log('a =', a)
console.log('b =', b)

function getSum (a, b) {
    return a + b
}

function getDif (a, b) {
    return a - b
}

function getMult (a, b) {
    return a * b
}

function getDiv (a, b) {
    return b ? a/b : 'Ошибка деления на 0'
}

function calculate (a, b, sign) {
    switch (sign) {
        case 'сложить':
            return getSum(a, b)
        case 'вычесть':
            return getDif(a, b)
        case 'умножить':
            return getMult(a, b)
        case 'разделить':
            return getDiv(a, b)
        default:
            return 'Неизвестная операция'
    }
}

console.log('a + b =', calculate(a, b, 'сложить'))
console.log('a - b =', calculate(a, b, 'вычесть'))
console.log('a * b =', calculate(a, b, 'умножить'))
console.log('a / b =', calculate(a, b, 'разделить'))
