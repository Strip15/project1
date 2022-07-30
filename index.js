import ItemsList from './items-list'
import Item from './item'

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

const itemsList = ItemsList();
document.body.appendChild(itemsList)

const genereteItems = () => {
    mocks.forEach((item)=>{
        const ItemElement = Item(item.name, item.price)
        itemsList.appendChild(ItemElement)
    })
}

genereteItems();
/* const item1 = Item('Гвоздь', 1);
itemsList.appendChild(item1) */


