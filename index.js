import Item from './item'
import Cart from './cart'
import ItemsList from './item-list'



import 'normalize.css'
import './index.scss'

const mocks = [
    {
        id: 120120,
        name: "Гвоздь",
        price: 1
    },
    {
        id: 120121,
        name: "Молоток",
        price: 100
    },
    {
        id: 120122,
        name: "Колесо",
        price: 400
    },
]

let cart = []

const itemsList = ItemsList();
document.body.appendChild(itemsList)

const genereteItems = () => {
    mocks.forEach((item) => {

        const onAdd = () => {
            console.log('item added', item.id);
            cart.push(item)
        } 
        const ItemElement = Item(item.name, item.price, ()=> console.log('item added', item.id))
        itemsList.appendChild(ItemElement)
    })
}

genereteItems();

const cartElement = Cart(cart)
document.body.appendChild(cartElement)
/* const item1 = Item();
itemsList.appendChild(item1) */


