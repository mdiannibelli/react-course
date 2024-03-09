// Cuando utilizamos el rest operator dentro de una function o arrow function
// tomamos todos los argumentos que le pasamos a la función y los transformamos
// en un array. 
const rest = (...argumentos) => {
    console.log(argumentos)
}

rest(1,2,3) // [1,2,3] 


const rest2 = (a, ...argumentos) => {
    console.log(a)
    console.log(argumentos)
}

rest(1,2,3) // 1 [2,3] 


/* ------------------- */
// destructuring object 
const obj = {a: 1, b: 2, c: 3, d: 4}

const {a,b, ...restobj} = obj;
console.log(a,b,restobj) // 1, 2 {c: 3, d: 4}


// destructuring array
const array = [1,2,3,4]
const [aa, bb, ...r] = array;
console.log(a,b, r) // 1 2 [3, 4, 5]


// destructuring arrow function (react method)
const useState = () => ['valor', () => {}]

// Esto retona un valor 'valor' y una función 'setValor' con la que podramos actualizar el valor
const [valor, setValor] = useState();
console.log(valor, setValor) // valor [Function (anonymous)]