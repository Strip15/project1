import Item from './components/item'
import Cart from './components/cart'
import Intro from './components/intro'
import ItemsList from './components/items-list'
import GvozdImg from './assets/img/gvozd.png'
import MolotImg from './assets/img/molot.png'
import Chainik from './assets/img/Chainik.png'



import 'normalize.css'
import './index.scss'
import IntroList from './components/intro/intro'

 const mocks = [
    {
        id: 120120,
        name: "Гвоздик",
        price: 1,
        img: GvozdImg
    },
    {
        id: 120121,
        name: "Молот",
        price: 100,
        img: MolotImg
    },
    {
        id: 120122,
        name: "Чайник",
        price: 400,
        img: Chainik
    },
] 

let cart = []

const introList = IntroList();
document.body.appendChild(introList)

const itemsList = ItemsList();
const {CartElement, updateCart} = Cart(cart)

document.body.appendChild(itemsList)

const genereteItems = () => {
    mocks.forEach((item) => {
        //добавитть в корзину
        const onAdd = () => {
            cart.push(item)
            updateCart(cart) 

        } 
        //Убрать из корзины
        const offAdd = () => {
            cart.pop(item)
            updateCart(cart)
/*         console.log(cart)
             if (cart.price === 1) {
                console.log('нашел') */
/*                 cart.splice(0,1)  */
            } 
/*             updateCart(cart) */
          
        const itemElement = Item(item.name, item.price, item.img, onAdd, offAdd)
        itemsList.appendChild(itemElement)
    })
}

genereteItems();

document.body.appendChild(CartElement);


