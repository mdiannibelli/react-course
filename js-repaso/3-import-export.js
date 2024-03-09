// Forma 1 Node
const animales = ['lobo', 'leon' , 'libelula']
module.exports = animales; // <==== exports


const anim = require('./import-export') 
console.log(anim) // ['lobo, leo, libelula']

// Forma 2 ECMAScript
import anim, {animales} from './import-export.js'
console.log(anim) // ERROR - Debemos setear en package.json el "type": "module" o colocar el archivo en .mjs
