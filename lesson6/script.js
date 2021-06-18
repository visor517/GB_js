document.addEventListener("DOMContentLoaded", () => {
    const catalog = document.getElementById('catalog_content')
    const basket = document.getElementById('basket_content')

    const catalog_arr = [
        {
            id: 1,
            name: 'Snickers',
            price: 50,
            image: 'snickers.jpg'
        },
        {
            id: 2,
            name: 'Mars',
            price: 45,
            image: 'mars.jpg'
        },
        {
            id: 3,
            name: 'Bounty',
            price: 40,
            image: 'bounty.jpg'
        },
        {
            id: 4,
            name: 'Twix',
            price: 50,
            image: 'twix.jpg'
        }
    ]
    const basket_arr = []

    function set_catalog(items) {
        items.forEach(item => {
            let element = document.createElement('div')
            element.classList.add('catalog_item')
            element.innerHTML =
                `<div class="item_header">
                    <h3>${item.name}</h3>
                    <span class="item_price">${item.price} р.</span>
                </div>
                <div class="slider">
                    <img class="slider_image" src="images/${item.image}" alt="${item.name}">
                </div>
                <button class="buyButton" data-id="${item.id}">В корзину</button>
                `
            catalog.appendChild(element)
        });
    }

    function reset_basket(items) {
        basket.innerHTML = ""
        items.forEach(item => {
            let element = document.createElement('div')
            element.classList.add('purchase')
            element.innerHTML = `
                <div class="purchase_name">${item.name}</div>
                <div class="purchase_price">${item.price} р.</div>
                <div class="purchase_quantity">${item.quantity} шт</div>
                <div class="purchase_total">${item.price * item.quantity} р.</div>
                <button class="delButton" data-id="${item.id}">Удалить</button>
                `
            basket.appendChild(element)
        })
    }

    set_catalog(catalog_arr)

    catalog.addEventListener('click', event => {
        if (event.target.classList.contains('buyButton')) {
            const id = event.target.getAttribute('data-id')
            let purchase = basket_arr.find(elem => elem.id == id)
            if (!purchase) {
                let item = catalog_arr.find(elem => elem.id == id)
                item.quantity = 1
                basket_arr.push(item)
            }
            else {
                purchase.quantity += 1
            }
            reset_basket(basket_arr)
        }
    })

    basket.addEventListener('click', event => {
        if (event.target.classList.contains('delButton')) {
            const id = event.target.getAttribute('data-id')
            const elemId = basket_arr.findIndex(elem => elem.id == id)
            basket_arr.splice(elemId, 1)
            reset_basket(basket_arr)
        }
    })

})