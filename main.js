const calculatorButton = document.querySelector("button")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const modal = document.querySelector(".modal")
const textResult = document.querySelector(".content h1")
const closeModal = document.querySelector("#closeButton")
const screenError = document.querySelector(".screen-error")

calculatorButton.addEventListener("click", calculate)
closeModal.addEventListener("click", closeResult)

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
  modal.classList.toggle("hide")
  textResult.innerHTML = `Seu IMC é de ${result}`
}

function closeResult() {
  modal.classList.toggle("hide")
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