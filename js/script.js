var entrada = document.querySelector("#texto-entrada");
var entradaLimpa = entrada.normalize();
var resultado = document.querySelector('#texto-saida');
var btnCriptografar = document.querySelector('#btn-cripto');
var btnDescriptografar = document.querySelector('#btn-descripto');
var copiarTexto = document.querySelector('#btn-copiar');

//var validaEntrada = /[(0-9.)(a0)(0a.)(À-ü)]/gim;
//var validaEntrada = /[(0-9)|(a0*)|(0a*)|(À-ü)\r\n]+/gim;
var validaEntrada = /[(0-9)]/gim;
var testeNum = "123";
btnCriptografar.addEventListener('click', (event) => {

    event.preventDefault();
    resultado.textContent = validarEntrada(criptografar(entrada.value));

    entrada.value = "";

})

btnDescriptografar.addEventListener('click', (event) => {
    event.preventDefault();

    resultado.textContent = descriptografar(entrada.value);
    entrada.value = "";
})

copiarTexto.addEventListener('click', (event) => {

    event.preventDefault();

    resultado.select();

    document.execCommand('copy');
    entrada.value = "";
})

function criptografar(entrada) {

    resultadoCripto = entrada.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat").toLowerCase();

    return resultadoCripto;

}

function descriptografar(texto) {

    saidaDescriptografada = texto.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u')

    return saidaDescriptografada;

}
console.log(validaEntrada.test(testeNum));

function validarEntrada(frase) {

    if (validaEntrada.test(frase)) {
        return "Números não são aceitos! Eles facilitam que seu segredo seja descoberto ;)";
    } else {
        console.log(frase);
        return frase;

    }

}
