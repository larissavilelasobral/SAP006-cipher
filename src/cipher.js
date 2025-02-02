const cipher = { 
  encode: function(entradanumber,entradatext) { 
    let message = "";
    if (entradanumber == "" || entradatext == ""){
      throw new TypeError('Valor string não adicionado.', 'index.js', 10)
    }
    for (let i = 0; i < entradatext.length; i++) { 
      let codeEncode = entradatext.charCodeAt(i); 
      if(codeEncode >= 32 && codeEncode <= 64){
        message += entradatext.charAt(i);
      }else if(codeEncode >= 65 && codeEncode<=90){
        message += String.fromCharCode((codeEncode - 65 + entradanumber)%26 + 65);
      }else if(codeEncode >= 97 && codeEncode <= 122){
        message += String.fromCharCode((codeEncode - 97 + entradanumber)%26 + 97)
      }
    }
    return message;
  },
  decode: function(entradanumber,entradatext){
  if (entradanumber == "" || entradatext == ""){
    throw new TypeError('Valor string não adicionado.', 'index.js', 10)
  }
    let messageSegunda = "";
    for (let i = 0; i < entradatext.length; i++){
      let codeDecode = entradatext.charCodeAt(i);
      if(codeDecode >= 32 && codeDecode <= 64){
        messageSegunda += entradatext.charAt(i);
      }else if(codeDecode >= 65 && codeDecode<=90){
        messageSegunda += String.fromCharCode((codeDecode - entradanumber - 65) %26 + 65)
      }else if(codeDecode >= 97 && codeDecode <= 122){
        messageSegunda += String.fromCharCode((codeDecode - 97 - entradanumber)%26 + 97)
      }
    }
    return messageSegunda;
  }
}
export default cipher;