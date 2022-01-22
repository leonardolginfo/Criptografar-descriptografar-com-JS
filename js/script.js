var vogais = ["a", "e", "i", "o", "u"];

var cifra = ["enter", "imes", "ai", "ober", "ufat"];

var textoEntrada = "sera";
var resultadoCripto;
var saidaDescriptografada;

function criptografar(texto) {

    resultadoCripto = texto.replace(/a/gi, 'ai')
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat');

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

criptografar(textoEntrada);
console.log("Texto recebido: " + textoEntrada)
console.log("Texto criptografdo " + resultadoCripto);
descriptografar(resultadoCripto);
console.log("Texto descriptografado: " + saidaDescriptografada);