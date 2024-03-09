// Funcionalidad de funciones que se DECLARAN con la palabra reservada function
// Las function pueden cumplir con 2 objetivos; ser una función o pueden tener un contexto de this
function Fn() {
    // {} la palabra 'new' crea un objeto y engloba todas las propiedades que le asignemos con this
    // {prop: 'propiedad'}
    // va a ignorar el return, porque va a retornar 'this'
    this.prop = 'propiedad'
    return 'felicidad'
}

const f = new Fn();
console.log(r) // {prop: 'propiedad'}


// arrow function
// No pueden ser llamadas con la palabra reservada NEW
// No tienen un contexto de this

console.log(this)
const fatFn = () => {
    this.prop = 'propiedad'; // <== estamos llamando al this del clg de afuera
}
const f1 = fatFn()
console.log(this) // {} {prop: 'lala'} 

// arrow function con return implicito
const fnR = () => 2 
console.log(fnR()) // 2