import { Modal } from './modal.js'

const calculatorButton = document.querySelector("button")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const screenError = document.querySelector(".screen-error")


calculatorButton.addEventListener("click", calculate)



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

export function closeResult() {
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