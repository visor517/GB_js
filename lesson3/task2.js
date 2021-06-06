// 2. С этого урока начинаем работать с функционалом интернет-магазина.
// Предположим, есть сущность корзины. Нужно реализовать функционал подсчета
// стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость
// корзины.

let basket = []

let i = 0

while (i++ <= 9) {
    basket.push(Math.round(Math.random() * 10000))
}

console.log(basket)

function countBasketPrice(arr) {
    return arr.reduce( (accumulator, current) => accumulator + current)
}

console.log("Сумма корзины:", countBasketPrice(basket))