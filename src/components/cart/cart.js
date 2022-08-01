import './cart.scss'

const Cart = (cart) => {
    const CartElement = document.createElement('div')
    const itemsCountElement = document.createElement('span')
    const priceElement = document.createElement('span')
    const itemname = document.createElement('span')

   /*  itemname.innerText = `Список: ${cart.id}` */

/*     itemsCountElement.innerText =`Количество товаров ${cart.length}` */
    priceElement.innerText = `Цена: 0`
    CartElement.className = 'cart';
    itemsCountElement.className = 'cart__count';
    priceElement.className = 'cart_price';
    CartElement.appendChild(itemsCountElement)
    CartElement.appendChild(priceElement)
  /*   CartElement.appendChild(itemname) */

    const updateCart = (newCart) => {
/*         itemsCountElement.innerText = `Количество товаров: ${newCart.length}` */
        const sumPrice = newCart.reduce((sum,item) => sum + item.price, 0) 
        priceElement.innerText = `Цена: ${sumPrice}`
    } 

    return {CartElement, updateCart}
}

export default Cart;