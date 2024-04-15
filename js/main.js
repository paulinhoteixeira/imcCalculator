import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'

const calculatorButton = document.querySelector("button")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")


calculatorButton.addEventListener("click", calculate)



function calculate() {
  let weight = Number(inputWeight.value)
  let height = Number(inputHeight.value/100)

  if(isNumber(weight) && isNumber(height)) {
    let result = Number((weight / (height* height)).toFixed(2))
    AlertError.close()
    showResult(result)
  }else{
    AlertError.open()


  } 
    
}

function showResult(result) {
  Modal.open()
  Modal.textResult.innerText = `Seu IMC é de ${result}`
}

export function closeResult() {
  Modal.close()
  AlertError.close()
  inputWeight.value = ""
  inputHeight.value = ""
}

function isNumber(value) {
  return !isNaN(value) && value != "" 
}

