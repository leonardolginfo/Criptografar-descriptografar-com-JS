var entrada = document.querySelector("#texto-entrada");
var resultado = document.querySelector('#texto-saida');
var btnCriptografar = document.querySelector('#btn-cripto');
var btnDescriptografar = document.querySelector('#btn-descripto');
var copiarTexto = document.querySelector('#btn-copiar');



btnCriptografar.addEventListener('click', (event) => {

    event.preventDefault();

    resultado.textContent = criptografar(entrada.value);

    entrada.value = "";

})

btnDescriptografar.addEventListener('click', (event) => {
    event.preventDefault();

    resultado.textContent = descriptografar(entrada.value);
    entrada.value = "";
})

function criptografar(entrada) {

    resultadoCripto = entrada.replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    return resultadoCripto;

}


function descriptografar(texto) {

    saidaDescriptografada = texto.replace(/ai/gi, 'a')
        .replace(/enter/gi, 'e')
        .replace(/imes/gi, 'i')
        .replace(/ober/gi, 'o')
        .replace(/ufat/gi, 'u')
    return saidaDescriptografada;
}




    