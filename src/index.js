import cipher from './cipher.js';

console.log(cipher);

const buttonCrip = document.getElementById('criptografar');
//transformando o primeiro botão em uma variavel

    function criptografarCode(e) { //função do primeiro botão
        e.preventDefault(); //depois que o click acontece o evento para
        const entradanumber = Number(document.getElementById("entradanumber").value);
        let entradatext = document.getElementById("entradatext").value;
        const cipherCode = cipher.encode(entradanumber,entradatext);
            document.getElementById("saidatext").value = cipherCode;
}
buttonCrip.addEventListener("click", criptografarCode);