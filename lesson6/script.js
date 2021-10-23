document.addEventListener("DOMContentLoaded", () => {
    const catalog = document.getElementById('catalog_content')
    const basket = document.getElementById('basket')
    const basket_content = document.getElementById('basket_content')
    const basket_status = document.getElementById('basketStatus')

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

    function set_status() {
        let result = basket_arr.length > 0 ? `В корзине ${basket_arr.reduce((acc,item) => acc += item.quantity, 0 )} товаров 
                                                на сумму ${basket_arr.reduce((acc,item) => acc += item.price * item.quantity, 0 )} руб` : 'Пуста'
        basket_status.innerHTML = result
    }

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
        basket_content.innerHTML = ""
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
            basket_content.appendChild(element)
        })
    }

    set_catalog(catalog_arr)
    set_status()

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
            set_status()
        }
    })

    basket.addEventListener('click', event => {
        if (event.target.classList.contains('delButton')) {
            const id = event.target.getAttribute('data-id')
            const elemId = basket_arr.findIndex(elem => elem.id == id)
            basket_arr.splice(elemId, 1)
            reset_basket(basket_arr)
            set_status()
        }
    })

})

function changeSlide(isForward) {
    const basket = document.getElementById('basket')
    const sections = basket.querySelectorAll('section')
    for (let i = 0; i < sections.length; i++) {
        if (!sections[i].classList.contains('display__none')) {
            if (isForward) {
                if (i < sections.length - 1) {
                    sections[i].classList.add('display__none')
                    sections[i+1].classList.remove('display__none')
                }
            } 
            else {
                if (i != 0) {
                    sections[i].classList.add('display__none')
                    sections[i-1].classList.remove('display__none')
                }
            }
            break
        }
    }
}

function tog_basket() {
    document.getElementById('basket').classList.toggle('display__none')
}