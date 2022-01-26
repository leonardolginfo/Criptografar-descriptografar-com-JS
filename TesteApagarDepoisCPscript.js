var vogais = ["a", "e", "i", "o", "u"];

var cifra = ["enter", "imes", "ai", "ober", "ufat"];

var textoEntrada = "sera";
var resultadoCripto;
var saidaDescriptografada;

function criptografar(texto) {

    resultadoCripto = texto.replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")

    console.log( resultadoCripto);
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

const valida = /[0-9]/;

var teste1 = "Maria casou três vezes e sep1arou duas";

console.log("Tem número ?");

console.log(valida.test(teste1)? "Tem sim." : "Não tem.");


