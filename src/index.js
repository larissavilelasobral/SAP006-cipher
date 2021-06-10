import cipher from './cipher.js'; //importando a variavel cipher da pasta cipher.js

//console.log(cipher);

const buttonCriptografar = document.getElementById("criptografar");
//transformando o primeiro botão em uma variavel

    function criptografarCode(e) { //função do primeiro botão
        e.preventDefault(); //depois que o click acontece o evento para.
        const entradanumber = Number(document.getElementById("entradanumber").value);//transformando a entrada value em numero e em variavel.
        const entradatext = document.getElementById("entradatext").value; //pegando o value da entrada e transformando em variavel
        const cipherCode = cipher.encode(entradanumber,entradatext); //chamando a variavel cipher e dentro dela a função encode com os paremetros.
            document.getElementById("entradatext").value = cipherCode; //colocando o valor de cipherCode como value do textarea entradatext.
}
buttonCriptografar.addEventListener("click", criptografarCode); //adicionando o evento de click para chama a função de criptografar

const buttonTraduzir = document.getElementById("traduzir");

function traduzir(e) {
    e.preventDefault();
    const entradanumber = Number(document.getElementById("entradanumber").value);
    const entradatext = document.getElementById("entradatext").value;
    const cipherCode = cipher.decode(entradanumber,entradatext);
    document.getElementById("entradatext").value = cipherCode;
}
buttonTraduzir.addEventListener("click", traduzir)