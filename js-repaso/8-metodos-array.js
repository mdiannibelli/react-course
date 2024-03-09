const array = [1,2,3,4,5];

// FILTER toma los valores de un array y devuelve los valores que evaluen a true
const r = array.filter(argument => argument > 2);
console.log(r) // [3,4,5]

// le podemos asignar un índice que es la posición del argumenta que esta iterando
const results = array.filter((argument, i) => {
    console.log(i) // 0 1 2 3 4
    return argument > 2; // [3,4,5]
}) 

/* ------------------------------------------------------------------------------- */

// MAP devuelve un array de la misma longitud pero con una función aplicada en cada argumento
const mapped = array.map((arg) => arg * 2);
console.log(mapped) // [2, 4, 6, 8, 10]

const mappedH1 = array.map((arg) => `<h1>${arg}</h1>`)
console.log(mappedH1) // <h1>1</h1> <h1>2</h1> <h1>3</h> <h1>4</h> <h1>5</h>

/*  mapeo de un listado de usuarios */
const users = [
    {id:1, name:'John'},
    {id:2, name:'Agus'},
    {id:3, name:'Floky'},
    {id:4, name:'Lehn'},
    {id:5, name:'Torn'},
]

const usersMapped = users.map((user) => `<p>${user.name}</p>`)

/* ------------------------------------------------------------------------------- */

// REDUCE toma todos los elementos de un array y devolvemos lo que nosotros queremos
// sumar, eliminar los duplicados, correr promesas en secuencias, etc...

const numbers = [1,2,3,4,5,6,7,8,9,10]

// recibe dos elementos, acumulador y argumento
// acc => valor inicial de 0
// arg => numbers 
// 1 + 1 => 2 => acc = 2
// 2 + 2 => 4 => acc = 4
// 4 + 3 => 7 => acc = 7
// 7 + 4 => 5 => acc = 11
// hasta 55 
const sum = numbers.reduce((acc, arg) => acc + arg, 0)
console.log(sum)


// obtener máximo
const getMax = (a,b) => Math.max(a,b)
const max = numbers.reduce(getMax,0) // <= se puede usar sin el valor inicial sin el cero (getMax)
console.log(max) // 10


// obtener nombres con reduce (mapeo con reduce)
const username = users.reduce((acc,arg) => `${acc}, ${arg.name}`)
console.log(username)  // John Agus Floky Lehn Torn

// filtrar y función de map al mismo tiempo
const r1 = users.reduce((acc,arg) => {
    if(arg.id < 2) {
        console.log(acc)
        return acc // filter devuelve []
    } else {
        return acc.concat(arg) // map devuelve [{id: '', name: ''}] (array concatenado a los argumentos)
    }
}, [])
console.log(r1) // [{id: 2, name: "Agus"}, {id: 3, name: "Floky"}, {id: 4, name: "Lehn"}, {id: 5, name: "Torn"]