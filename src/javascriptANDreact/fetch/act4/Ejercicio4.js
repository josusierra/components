const userSelect = document.getElementById('userSelect');
const updateUserForm = document.getElementById('updateUserForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const updateMessage = document.getElementById('updateMessage');

fetch('http://localhost:3000/users')
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