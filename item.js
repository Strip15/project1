import './item.scss'

const Item = (name, price) => {
    const ItemElement = document.createElement('div')
    ItemElement.className = 'item'
    const nameElement = document.createElement('span')
    nameElement.className = 'item__name'
    nameElement.innerText = name
    const priceElement = document.createElement('span')
    priceElement.className = 'item__price'
    priceElement.innerText = `Цена: ${price}`

    const minusElement = document.createElement('button')
    minusElement.innerText = '-'
    minusElement.className = 'bt_minus'
    const inputElement = document.createElement('input')
    inputElement.className = 'input'
    const plusElement = document.createElement('button')
    plusElement.innerText = '+'
    plusElement.className = 'bt_plus' 

    const buttonElement = document.createElement('button')
    buttonElement.className = 'add_button'
    buttonElement.innerText = 'Добавить'

    ItemElement.appendChild(nameElement)
    ItemElement.appendChild(priceElement)
    ItemElement.appendChild(minusElement)
    ItemElement.appendChild(inputElement)
    ItemElement.appendChild(plusElement)
    ItemElement.appendChild(buttonElement)

    return ItemElement
};   

export default Item