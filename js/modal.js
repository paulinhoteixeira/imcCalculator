import { closeResult } from './main.js'


export const Modal ={
  wrapper: document.querySelector(".modal-wrapper"),
  textResult: document.querySelector(".content h1"),
  buttonClose: document.querySelector("#closeButton"),

  open(){
    Modal.wrapper.classList.remove("hide")    
  },
  close(){
    Modal.wrapper.classList.add("hide")
  }
}

Modal.buttonClose.addEventListener("click", closeResult)

window.addEventListener("keydown", handleKeyDown)
function handleKeyDown(event) {
  if(event.key === 'Escape'){
    Modal.close()
  }
}