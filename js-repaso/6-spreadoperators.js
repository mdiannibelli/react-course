const fn = (a,b,c) => console.log(a+b+c);

// El ARGUMENTO [1,2,3] es el valor que contiene el PARAMETRO (a,b,c)
const arr = [1,2,3];

// Para ahorrar esto
// fn(arr[0], arr[1], arr[2]) 

// Hacer esto
fn(...arr)

/* ----------------------------------------------------------------- */

// Mezcla entre el arr y el arr1
const arr1 = [5,6]

// 1era forma (larga)
const arr2 = arr.concat(arr1);
console.log(arr2); // [1,2,3,4,5,6]

// 2da forma (corta)
const arr3 = [...arr, ...arr1]
console.log(arr3) // [1,2,3,4,5,6]  

/* ------------------------------------------------------------------ */

// Mezclar objetos creando copias del objeto 
const obj1 = {a: 1, b: 2};

const obj2 = {
    ...obj1, // creamos copia del obj1 "{a: 1, b: 2}"
    loading: true,
    data: {
        prop: 'lele',
        animal: 'person'
    }
}
console.log(obj2) // {a: 10, b: 2, loading: true, data:{prop: 'lele', animal: 'person}}