const characters = 32;
const maxCharacters = 237;

const cipher = {
  encode: function(entradanumber,entradatext) {
    let message = "";

    for (let i = 0; i < entradatext.length; i++) {
      let code = entradatext.charCodeAt(i);
      if(code >= characters && code <= maxCharacters){
        message += String.fromCharCode((code - characters + entradanumber) %205 + characters);}
      else { code += entradatext.charAt(i);
      }
    }
    return message;
  }
}
export default cipher;