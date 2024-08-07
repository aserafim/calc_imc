const form = document.getElementById('imcForm')
const inputAltura = document.getElementById('altura')
const inputPeso = document.getElementById('peso')

form.onsubmit = async (event) => {
    event.preventDefault()
    const altura = inputAltura.value
    const peso = inputPeso.value
    
    const imc = peso / (altura * altura)

    alert("Seu imc é: " + imc.toFixed(2))
}

