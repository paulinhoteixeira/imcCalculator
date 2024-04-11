const calculatorButton = document.querySelector("button")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const screenError = document.querySelector(".screen-error")

const Modal ={
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

calculatorButton.addEventListener("click", calculate)
Modal.buttonClose.addEventListener("click", closeResult)



function calculate() {
  let weight = Number(inputWeight.value)
  let height = Number(inputHeight.value/100)

  let result = Number((weight / (height* height)).toFixed(2))

  if(isNumber(result)){
    removeMessageError()
    showResult(result)
  }else{
    showMessageError()
  }
    
}

function showResult(result) {
  Modal.open()
  Modal.textResult.innerText = `Seu IMC é de ${result}`
}

function closeResult() {
  Modal.close()
  removeMessageError()
  inputWeight.value = ""
  inputHeight.value = ""
}

function isNumber(result) {
  return typeof result === 'number' && !Number.isNaN(result)
}

function showMessageError(){
  screenError.classList.remove("hide")
}

function removeMessageError(){
  screenError.classList.add("hide")
}