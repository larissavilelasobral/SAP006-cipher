import cipher from './cipher.js'; 

//console.log(cipher);

const buttonCriptografar = document.getElementById("criptografar");

    function criptografarCode() { 
        const entradanumber = Number(document.getElementById("entradanumber").value);
        const entradatext = document.getElementById("entradatext").value.toUpperCase(); 
        const cipherCode = cipher.encode(entradanumber,entradatext); 
            document.getElementById("entradatext").value = cipherCode; 
}
buttonCriptografar.addEventListener("click", criptografarCode); 

const buttonTraduzir = document.getElementById("traduzir");

function traduzir() {
    const entradanumber = Number(document.getElementById("entradanumber").value);
    const entradatext = document.getElementById("entradatext").value;
    const cipherCode = cipher.decode(entradanumber,entradatext);
    document.getElementById("entradatext").value = cipherCode;
}
buttonTraduzir.addEventListener("click", traduzir)