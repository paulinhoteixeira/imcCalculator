const calculatorButton = document.querySelector("button")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const modal = document.querySelector(".modal")
const textResult = document.querySelector(".content h1")
const closeModal = document.querySelector("#closeButton")

calculatorButton.addEventListener("click", calculate)
closeModal.addEventListener("click", closeResult)

function calculate() {
  let weight = inputWeight.value
  let height = inputHeight.value/100

  let result = (weight / (height* height)).toFixed(2)
  console.log(result)
  showResult(result)
}

function showResult(result) {
  modal.classList.toggle("hide")
  textResult.innerHTML = `Seu IMC é de ${result}`
}

function closeResult() {
  modal.classList.toggle("hide")
  inputWeight.value = ""
  inputHeight.value = ""
}