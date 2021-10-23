// Продолжить работу с интернет-магазином:
// -В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
// объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.

function Product (name, section, price) {
    this.name = name
    this.section = section
    this.price = price
}

function ProductInBasket (name, section, price, quantity = 1) {
    Product.call(this, name, section, price)
    this.quantity = quantity
  
    this.get_price = function() {
        return this.price * this.quantity
    }
    this.inc_quantity = function() {
        this.quantity += 1
    }
    this.dec_quantity = function() {
        this.quantity -= 1
    }
}

let basket = []

basket.push(new ProductInBasket('Mars','chocolate',50))
basket.push(new ProductInBasket('Snickers','chocolate',40))
basket.push(new ProductInBasket('Bounty','chocolate',30))
basket[2].inc_quantity()

let total_price = basket.reduce((acc, cur) => acc + cur.get_price(), 0)

console.log(total_price)
