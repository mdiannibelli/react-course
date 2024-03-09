// Obtener datos a través de una URL 

// Método GET
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // Retorna una promesa
    .then(data => console.log(data)) // Retorna una promesa



// Método POST 
const fnAsync = async() => {
   const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'tokendeautorización'
        },
        body: JSON.stringify({ // devolvemos un cuerpo en forma de string
            name: 'Lobo',
            website: 'google.com'
        })
    
    })
    const data = await response.json();
    console.log(data)

}
fnAsync()