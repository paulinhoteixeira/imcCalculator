import { Modal } from './modal.js'

export function showResult(result) {
  Modal.open()
  Modal.textResult.innerText = `Seu IMC é de ${result}`
}

export function isNumber(value) {
  return !isNaN(value) && value != "" 
}

export function calculateIMC(weight, height) {
  return Number((weight / (height* height)).toFixed(2))
}

