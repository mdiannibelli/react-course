// Expresión de clase
// Creamos una clase con el nombre R y se la asignamos a una constante Rectangulo
const Rectangulo = class R {

}

const r = new Rectangulo();

// Declaración de clase
console.log(Circulo) // <= Error! No tiene hoisting, porque es una clase declarada con class
class Circulo {

}


// Hoisting
// Es cuando tomamos variables definidas con var
// y funciones definidas con function
// y las lleva al comienzo del archivo
function Cuadrado() {
}

// Todas las clases ejecutan un constructor y se se invocan con un 'new'
class Lobo {
    constructor() {
        console.log('Lobo')
    }
}
const feliz = new Lobo(); // Usamos la palabra reservada 'new' para ejecutar el constructor de la clase Lobo

// Clase con parámetro
class Libelula {
    constructor(color = 'blanca') { // <== blanca es el color por defecto en caso de que no se le asigne un parametro
        console.log(`Esta es una libelula de color ${color}`)
    }
}
const roja = new Libelula('Roja') // Esta es una libelula de color roja
const libelula = new Libelula() // Esta es una libelula de color blanca

// Clase con parámetro
class Foca {
    color = 'blanca'
    constructor() {
        console.log(`Esta es una libelula de color ${this.color}`) // <== con el this hace referencia a la instancia y con el . accede a la propiedad
    }
}
const rojiza = new Foca('rojiza') // Esta es una foca de color rojiza
const foca = new Foca() // Esta es una foca de color blanca

