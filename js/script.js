var vogais = ["a", "e", "i", "o", "u"];

var cifra = ["enter", "imes", "ai", "ober", "ufat"];

var saidaCriptografada;

function criptografar(texto) {

    var entradaArray = Array.from(texto);

    for (var i = 0; i < entradaArray.length; i++) {
        if (entradaArray[i] == vogais[0]) {

            var textoNovo = texto[i].replace(texto[i], cifra[2]);
            entradaArray[i] = textoNovo;

        } else if (entradaArray[i] == vogais[1]) {

            var textoNovo = texto[i].replace(texto[i], cifra[0]);
            entradaArray[i] = textoNovo;

        } else if (entradaArray[i] == vogais[2]) {

            var textoNovo = texto[i].replace(texto[i], cifra[1]);
            entradaArray[i] = textoNovo;

        } else if (entradaArray[i] == vogais[3]) {

            var textoNovo = texto[i].replace(texto[i], cifra[3]);
            entradaArray[i] = textoNovo;

        } else if (entradaArray[i] == vogais[4]) {

            var textoNovo = texto[i].replace(texto[i], cifra[4]);
            entradaArray[i] = textoNovo;
        }

    }
    saidaCriptografada = entradaArray.join('');
    console.log(saidaCriptografada);

}

var texto = "sera";

function descriptografar(){

    dhasdhahdkashdkjashdkasdka
    
}
criptografar(texto);






