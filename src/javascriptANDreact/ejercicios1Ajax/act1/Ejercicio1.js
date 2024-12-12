const userUrl = "http://localhost:3000/users";

const xhr= new XMLHttpRequest();
xhr.open("GET", userUrl);
xhr.send();
xhr.addEventListener('load', function() {
    if (xhr.status === 200) {
        const users = JSON.parse(xhr.responseText);
        console.log(users);
        const ul = document.querySelector("#usersTable tbody");
        ul.innerHTML= "";

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML= `
                <li>${user.name}</li>
                <li>${user.email}</li>
                `;
            ul.appendChild(row);
        })
    }

})