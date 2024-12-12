const userUrl = "http://localhost:3000/users";

document.getElementById('addUser').addEventListener('submit', (event) => {
    event.preventDefault();
    const newUser={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    }    
    const peticion=new XMLHttpRequest();
    peticion.open('POST', 'http://localhost:3000/users');
    peticion.setRequestHeader('Content-type', 'application/json'); 
    peticion.send(JSON.stringify(newUser));
    peticion.addEventListener('load', function() {

    })
})