import './cart.scss'

const Cart = (cart) => {
    const CartElement = document.createElement('span')
    CartElement.interText =`Количество товаров ${cart.length}`

    return CartElement
}

export default Cart;