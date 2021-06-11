var quantidadeLetras = 65;

const cipher = { //variavel cipher em objeto
  encode: function(entradanumber,entradatext) { //funcão encode e seus parametros
    let message = ""; //
    if (entradanumber == "" || entradatext == ""){
      throw new TypeError('Valor string não adicionado. index.js:10', 'index.js', 10)
    }
    for (let i = 0; i < entradatext.length; i++) { //loop que rota até o tamanho do texto de entrada
      let codeEncode = entradatext.charCodeAt(i); //entra a palavra, e o numero zero; primeira letra e sai o numero dela C=67
      if(codeEncode >= 32 && codeEncode <= 64){
        message += entradatext.charAt(i);
      }else if(codeEncode >= 65 && codeEncode<=90){
        message += String.fromCharCode((codeEncode - quantidadeLetras + entradanumber)%26+quantidadeLetras);
      }else if(codeEncode >= 97 && codeEncode <= 122){
        message += String.fromCharCode((codeEncode - 26 + entradanumber)%26 + 65)
      }
    }
    return message;
  },
decode: function(entradanumber,entradatext){
  if (entradanumber == "" || entradatext == ""){
    throw new TypeError('Valor string não adicionado. index.js:10', 'index.js', 10)
  }
  let messageSegunda = "";
    for (let i = 0; i < entradatext.length; i++) {
      let codeDecode = entradatext.charCodeAt(i);
      
      let decodeFinal =  ((codeDecode - entradanumber - 65) %26 + 65)
      if(codeDecode >= 32 && codeDecode <= 64){
        messageSegunda += entradatext.charAt(i);
      }else if(codeDecode >= 65 && codeDecode<=90){
        messageSegunda += (String.fromCharCode(decodeFinal))
      }else if(codeDecode >= 97 && codeDecode <= 122){
        messageSegunda += String.fromCharCode((codeDecode - 97 - entradanumber)%26 + 97)
      }
   }
return messageSegunda;
}
}
export default cipher;

