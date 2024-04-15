import { AlertError } from './alert-error.js'
import { isNumber, showResult, calculateIMC } from './utils.js'


const calculatorButton = document.querySelector("button")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

calculatorButton.addEventListener("click", calculate)

function calculate() {
  let weight = Number(inputWeight.value)
  let height = Number(inputHeight.value/100)

  if(isNumber(weight) && isNumber(height)) {
    let result = calculateIMC(weight, height)
    AlertError.close()
    showResult(result)
  }else{
    AlertError.open()
  }     
}

