fetch('http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify({
        "name": "nombre",
        "email ": "nombre@gmail.com"
    }),
    headers: {
        'Content-Type': 'application/json'
    } 
})
.then(response => response.json())
.then(name => console.log(`El libro se ha creado con id ${name.id}`))