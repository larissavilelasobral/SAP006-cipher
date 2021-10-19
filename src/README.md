# Project Cifra de César

Aplicação onde o usuário poderá cifrar e decifrar um texto indicando a chave de deslocamento (offset) para gerar uma senha mais segura.
![Imagem Aplicação](https://i.ibb.co/jgdSh7F/image.png)
    

## Sobre o Projeto
Utilizar a técnica de criptografia(Cifra de César), uma cifra de substituição na qual cada letra de um texto a ser criptografado é substituída por outra letra, presente no alfabeto porém deslocada um certo número de posições à esquerda ou à direita.

## Usuários
Qualquer pessoa que deseje criar uma senha mais forte utilizando a cifra de césar.

Cifrar significa codificar. A cifra de César é um dos primeiros tipos de criptografias conhecidas na história. O imperador romano Júlio César utilizava essa cifra para enviar ordens secretas aos seus generais no campo de batalha.

![Cifra Senha](https://i.ibb.co/m5WqXRy/image.png)

## :file_folder: Estrutura dos Principais Arquivos
```
.
├── 📁 src
|   ├── 📁 imagens 
|   ├── 📄 cipher.js
|   ├── 📄 index.html
|   ├── 📄 index.js
|   └── 📄 style.css
├── 📁 test
|   └── 📄 cipher.spec.js
├── 📁 img
├── 📄 README.md
├── 📄 package.json

```
### Funcionamento 
A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um tipo de cifra por substituição, em que cada letra do texto original é substituida por outra que se encontra há um número fixo de posições (deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (offset) de 3 posições:

Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

A letra A será D
A palavra CASA será FDVD
Atualmente todas as cifras de substituição alfabética simples, são decifradas com facilidade e não oferecem muita segurança na comunicação, mas a cifra de César muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

![gif cifra](https://gifyu.com/images/gif-cifra.gif)

-----------

![Resultado testes](https://raw.githubusercontent.com/larissavilelasobral/SAP006-cipher/main/src/imagens/Anima%C3%A7%C3%A3o-testes.gif)
## Authors

### [Larissa Vilela](https://www.linkedin.com/in/larissa-vilela-sobral/)

  
