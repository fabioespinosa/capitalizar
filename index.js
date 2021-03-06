const capitalize = require('capitalize');
const palabras_no_capitalizables = ['de', 'en', 'la', 'las', 'y', 'los', 'del'];

module.exports = (texto_a_capitalizar) => {
  if (!texto_a_capitalizar) {
    throw 'debe haber un texto a capitalizar';
  }
  if (typeof texto_a_capitalizar !== 'string') {
    throw 'Solo se pueden capitalizar textos';
  }
  return texto_a_capitalizar
    .split(' ')
    .map((palabra) => {
      palabra = palabra.toLowerCase();
      if (palabras_no_capitalizables.includes(palabra)) {
        return palabra;
      }
      return capitalize.words(palabra);
    })
    .join(' ');
};
