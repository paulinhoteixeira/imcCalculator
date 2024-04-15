export const AlertError = {
  element: document.querySelector(".screen-error"),
  open(){
    this.element.classList.remove("hide")
  },
  close() {
    this.element.classList.add("hide")
  }
}


