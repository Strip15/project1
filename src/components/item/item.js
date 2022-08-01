//import ItemImg from './/..//../assets/img/gvozd.png'
import './item.scss'

const Item = (name, price, img, onAdd, offAdd) => {
    const ItemElement = document.createElement('div')
    ItemElement.className = 'item'

    const nameElement = document.createElement('span')
    nameElement.className = 'item__name'
    nameElement.innerText = name

    const priceElement = document.createElement('span')
    priceElement.className = 'item__price'
    priceElement.innerText = `Цена: ${price}`

    const imgElement = document.createElement('img')
    imgElement.className = 'item__img'
    imgElement.src = img

/*     const imgElement = document.createElement('img')
    imgElement.src = ItemImg;
    imgElement.className = 'item__img'  */

    const minusElement = document.createElement('button')
    minusElement.innerText = 'Убрать'
    minusElement.className = 'item__bt-minus'
    minusElement.addEventListener('click', offAdd) 
    minusElement.addEventListener('click',()=>{inputElement.value > 0 ? inputElement.value-- : inputElement.value == 0})

    const inputElement = document.createElement('input')
    inputElement.className = 'quantity'
    inputElement.value = '0' 
/*     
    const plusElement = document.createElement('button')
    plusElement.innerText = '+'
    plusElement.className = 'bt_plus'  */

    const buttonElement = document.createElement('button')
    buttonElement.className = 'item__add-button'
    buttonElement.innerText = 'Добавить'
    buttonElement.addEventListener('click', onAdd)
    buttonElement.addEventListener('click',()=>{inputElement.value++})

    ItemElement.appendChild(nameElement)
    ItemElement.appendChild(imgElement)
    ItemElement.appendChild(priceElement)
    ItemElement.appendChild(minusElement)
    ItemElement.appendChild(inputElement)
    /* ItemElement.appendChild(plusElement) */
    ItemElement.appendChild(buttonElement)

    return ItemElement
};   

export default Item