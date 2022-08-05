import Item from "./components/item";
import Cart from "./components/cart";
import ItemsList from "./components/items-list";
import GvozdImg from "./assets/img/gvozd.png";
import MolotImg from "./assets/img/molot.png";
import Chainik from "./assets/img/Chainik.png";

import "normalize.css";
import "./index.scss";
import IntroList from "./components/intro/intro";
import Modal from "./components/modal/modal";

const mocks = [
  {
    id: 120120,
    name: "Гвоздик",
    price: 1,
    img: GvozdImg,
  },
  {
    id: 120121,
    name: "Молот",
    price: 100,
    img: MolotImg,
  },
  {
    id: 120122,
    name: "Чайник",
    price: 400,
    img: Chainik,
  },
];

let cart = [];

let ModalText1 = [];

export default ModalText1 

const introList = IntroList();
document.body.appendChild(introList);

const itemsList = ItemsList();
const { CartElement, updateCart } = Cart(cart);

document.body.appendChild(itemsList);

const modal1 = Modal(ModalText1);
document.body.appendChild(modal1);

const genereteItems = () => {
  mocks.forEach((item) => {
    //добавитть в корзину
    const onAdd = () => {
      cart.push(item);
      ModalText1.push(item);
      console.log(ModalText1);
      updateCart(cart);
      updateCart(ModalText1)
      /*       inputElement.value++; */
    };
    //Убрать из корзины
    const offAdd = () => {
      /*       inputElement.value > 0 ? inputElement.value-- : inputElement.value == 0;
      for (i = 0; i <= cart.length; i++) {
        if (item.id === 120120) cart.splice(i, 1);
      }
      updateCart(cart);
 */
      cart.pop(item);
      updateCart(cart);
    };

    const itemElement = Item(item.name, item.price, item.img, onAdd, offAdd);
    itemsList.appendChild(itemElement);
  });
};

genereteItems();


document.body.appendChild(CartElement);

let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

/* let span = document.getElementsByClassName("modal-close")[0];  */

btn.onclick = function () {
  modal.style.display = "block";
};

/* span.onclick = function () {
  modal.style.display = "none";
};  */

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
/* $.modal = function(options) {
    const $modal = _createModal(options)
    let closing = false
  
    return {
      open() {
        !closing && $modal.classList.add('open')
      },
      close() {
        closing = true
        $modal.classList.remove('open')
        $modal.classList.add('hide')
      },
    }
  } */
/* 
var modal1 = document.getElementById("myModel");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("ModalClose")[0];
 
btn.onclick = function () {
    modal1.modal.dispaly = "block";
}
span.click = function () {
    ModalWindow.modal.display = "none";
}

window.click = function(event) {
    if (event.target == ModalWindow) {
        ModalWindow.modal.dispaly = "none"; */

