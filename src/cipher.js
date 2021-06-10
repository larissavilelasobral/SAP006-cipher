const characters = 32; //?
const maxCharacters = 237; //?
var quantidadeLetras = 65;

const cipher = { //variavel cipher em objeto
  encode: function(entradanumber,entradatext) { //funcão encode e seus parametros
    let message = ""; //

    for (let i = 0; i < entradatext.length; i++) { //loop que rota até o tamanho do texto de entrada
      let codeEncode = entradatext.charCodeAt(i); //entra a palavra, e o numero zero; primeira letra e sai o numero dela C=67
      if (codeEncode >= characters && codeEncode<=maxCharacters){
      //passando as letras criptografadas para a variavel message atreves de um incremento
      message += String.fromCharCode((codeEncode - quantidadeLetras + entradanumber)%26+quantidadeLetras);
      }else{
      codeEncode += entradatext.charAt(i); //??
      }

      // if(code >= characters && code <= maxCharacters){//if condicao
      //   message += String.fromCharCode((code - characters + entradanumber) %205 + characters);

      // } else { 
      //     code += entradatext.charAt(i);
      //   //transformando numero + offset em letra criptada. 
      // }
    }
    return message;
  },
decode: function(entradanumber,entradatext){
  let messageSegunda = "";
    for (let i = 0; i < entradatext.length; i++) {
      let inversa = ((entradatext.charCodeAt(i) - entradanumber -quantidadeLetras)%26 + quantidadeLetras)
      messageSegunda += (String.fromCharCode(inversa))
   }
return messageSegunda;

  //   for (let i = 0; i < entradatext.length; i++) {
  //     let codeDecode = entradatext.charCodeAt(i);
  //     if (codeDecode >= characters && codeDecode<=maxCharacters){
  //     messageSegunda += String.fromCharCode((codeDecode - characters - entradanumber)%205 + characters);
  //   }else{
  //   codeDecode += entradatext.charAt(i);
  //  }
  //  return messageSegunda;
  // }
}
}
export default cipher;

