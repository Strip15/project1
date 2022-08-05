import ModalText1 from "../..";
import "./modal.scss";

const Modal = (ModalText1) => {
  const ModalBt = document.createElement("button");
  ModalBt.id = "myBtn";
  ModalBt.innerText = "Корзина";
  /*  ModalBt.addEventListener("click", UpModal); */

  const ModalElements = document.createElement("div");
  ModalElements.className = "modal";
  ModalElements.id = "myModal";

  const ModalContent = document.createElement("div");
  ModalContent.className = "modal-content";

  /*   const ModalWindiw = document.createElement("div");
  ModalWindiw.className = "modal-window"; */

  const ModalHeader = document.createElement("div");
  ModalHeader.className = "modal-header";
  ModalHeader.innerText = "Покупки";

  const ModalClose = document.createElement("span");
  ModalClose.className = "modal-close";

  const ModalTitle = document.createElement("h2");
  ModalTitle.className = "modal-title";

  const ModalBody = document.createElement("div");
  ModalBody.className = "modal-body";

  const ModalText = document.createElement("p");
  ModalText.className = "modal-text";
  /* ModalText.innerText = `${ModalText1.name}` */

  const ModalFooter = document.createElement("div");
  ModalFooter.className = "modal-footer";

  /*   const ModalCancel = document.createElement("button");
  ModalCancel.className = "modal-cancel";
  ModalCancel.innerText = "Cancel"; */

  /*   const ModalFooter = document.createElement("div");
  ModalFooter.className = "modal-footer"; */
  ModalBt.appendChild(ModalElements);
  ModalElements.appendChild(ModalContent);
  ModalContent.appendChild(ModalHeader);
  ModalHeader.appendChild(ModalClose);
  ModalHeader.appendChild(ModalTitle);
  ModalContent.appendChild(ModalBody);
  ModalBody.appendChild(ModalText);
  ModalFooter.appendChild(ModalTitle);

  const UpModal = (ModalText1) => {
    let res = ModalText1.join();
    ModalText.innerText = `Покупки: ${res}`;

    return UpModal;
  };

  /* ModalText.innerText = `${ModalText1.name}` */
  /* 
  ModalTitle.innerText = `Корзина ${ModalText2}` */
  /*   ModalFooter.appendChild(ModalCancel); */

  return ModalBt
};

export default Modal
