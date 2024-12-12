fetch('http://localhost:3000/users')
.then(response => {
    console.log(response);
    return response.json();
})
.then(posts=> {
    fetch(`http://localhost:3000/users${id[0].userId}`)
})
.then(response => response.json())
.then(user => console.log(user.name))
.then(user => console.log(user.email))
.catch(error => console.log("error: ", error))