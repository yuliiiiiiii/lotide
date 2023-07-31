const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
console.log(assertEqual(tail(words).length, 2));
console.log(assertEqual(tail(words)[0], "Lighthouse"));