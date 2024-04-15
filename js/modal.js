import { AlertError } from './alert-error.js'
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  textResult: document.querySelector(".content h1"),
  buttonClose: document.querySelector("#closeButton"),

  open() {
    Modal.wrapper.classList.remove("hide");
  },
  close() {
    Modal.wrapper.classList.add("hide");
    AlertError.close();
    inputWeight.value = "";
    inputHeight.value = "";
  },
};

Modal.buttonClose.addEventListener("click", Modal.close);

window.addEventListener("keydown", handleKeyDown);
function handleKeyDown(event) {
  if (event.key === "Escape") {
    Modal.close();
  }
}
