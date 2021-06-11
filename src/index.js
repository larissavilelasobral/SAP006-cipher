import cipher from './cipher.js'; //importando a variavel cipher da pasta cipher.js

//console.log(cipher);

const buttonCriptografar = document.getElementById("criptografar");
//transformando o primeiro botão em uma variavel

    function criptografarCode() { //função do primeiro botão
        const entradanumber = Number(document.getElementById("entradanumber").value);//transformando a entrada value em numero e em variavel.
        const entradatext = document.getElementById("entradatext").value; //pegando o value da entrada e transformando em variavel
        // if (entradanumber == "" || entradanumber == "null"){
        //     throw new TypeError('Valor string não adicionado. index.js:10', 'index.js', 10)
        // }else if( entradatext == "" || entradatext == "null"){
        //     throw new TypeError('Valor number não adicionado. index.js:9','index.js', 9)
        // }
        const cipherCode = cipher.encode(entradanumber,entradatext); //chamando a variavel cipher e dentro dela a função encode com os paremetros.
            document.getElementById("entradatext").value = cipherCode; //colocando o valor de cipherCode como value do textarea entradatext.
}
buttonCriptografar.addEventListener("click", criptografarCode); //adicionando o evento de click para chama a função de criptografar

const buttonTraduzir = document.getElementById("traduzir");

function traduzir() {
    const entradanumber = Number(document.getElementById("entradanumber").value);
    const entradatext = document.getElementById("entradatext").value;
    const cipherCode = cipher.decode(entradanumber,entradatext);
    document.getElementById("entradatext").value = cipherCode;
}
buttonTraduzir.addEventListener("click", traduzir)