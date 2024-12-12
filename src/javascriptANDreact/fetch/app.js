fetch('https://jsonplaceholder.typicode.com/posts')
//.then(response => response.json())
.then(response => {
    console.log(response);
    return response.json();
})
.then(posts=> {
    fetch(`https://jsonplaceholder.typicode.com/users/${posts[0].userId}`)
})
.then(response => response.json())
.then(user => console.log(user.name))
.catch(error => console.log("error: ", error))




fetch('http://localhost:3000/books', {
    method: 'POST',
    body: JSON.stringify({
        "title": "Don quijote",
        "fecha ": "20/02/1605",
        "pages ": 1432,
        "author": 1
    }),
    headers: {
        'Content-Type': 'application/json'
    } 
})
.then(response => response.json())
.then(book => console.log(`El libro se ha creado con id ${book.id}`))