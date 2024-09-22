const alturaInput = document.getElementById("altura");
const pesoInput = document.getElementById("peso");
const botao = document.querySelector("#botaoIMC");

function verificarCampos(){
    if(alturaInput.value && pesoInput.value){
        botao.disabled = false;
    }
    else{
        botao.disabled = true;
    }
    
}

alturaInput.addEventListener("input", verificarCampos);
pesoInput.addEventListener("input", verificarCampos);

function calcularIMC(){
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    const resultado = (peso /(altura*altura)); 
    let div = document.getElementById("resultado");

    if(resultado <18.49){
        div.innerHTML = `Você está abaixo do peso ideal.<br>Resultado: ${resultado.toFixed(2)}`;
    } else if(resultado <=24.99){
        div.innerHTML = `Você está no peso ideal.<br>Resultado: ${resultado.toFixed(2)}`;
    } else if(resultado <= 29.99){
        div.innerHTML = `Você está acima do peso ideal.<br>Resultado: ${resultado.toFixed(2)}`;
    } else{
        div.innerHTML = `Você está com Obesidade.<br>Resultado: ${resultado.toFixed(2)}`;
    }
    
}