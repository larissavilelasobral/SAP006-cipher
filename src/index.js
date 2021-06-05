import cipher from './cipher.js';

console.log(cipher);

document.getElementById('criptografar').addEventListener('click',cipher)
document.getElementById('traduzir').addEventListener('click',traduzir)

function verificar() {
    let inputNumero = document.getElementById('entradanumber')
    let entradaNumero = Number(inputNumero.value) // quantidas de vezes que vai pular number
    let res = document.getElementById('res')

    let inputTexto = document.getElementById('entradatext') // frase que o cliente colocou
    let entradaTexto = String(inputTexto.value).toUpperCase() //frase texto string //larissa
    res.innerHTML = `(${entradaNumero} || ${entradaTexto})`
}
