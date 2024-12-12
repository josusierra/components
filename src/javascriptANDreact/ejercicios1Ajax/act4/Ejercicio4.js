const userSelect = document.getElementById('userSelect');
const updateUserForm = document.getElementById('updateUserForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const updateMessage = document.getElementById('updateMessage');

const userUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', selectUsers);
updateUserForm.addEventListener('submit', ActualizarUsers);
userSelect.addEventListener('change', verFormularioUser);



function selectUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', userUrl, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const users = JSON.parse(xhr.responseText);
            users.forEach(user => {
                const option = document.createElement('option');
                option.value = user.id;
                option.textContent = user.name;
                userSelect.appendChild(option);
            });
        } else {
            updateMessage.textContent = 'Error';
            updateMessage.style.color = 'red';
        }
    };
    xhr.onerror = function () {
        updateMessage.textContent = 'No se conecto';
        updateMessage.style.color = 'red';
    };
    xhr.send();
}

function verFormularioUser() {
    const xhr = new XMLHttpRequest();
    const userId = userSelect.value;
    xhr.open('GET', `${userUrl}/${userId}`, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const user = JSON.parse(xhr.responseText);
            nameField.value = user.name;
            emailField.value = user.email;
        } else {
            updateMessage.textContent = 'Error';
            updateMessage.style.color = 'red';
        }
    };
    xhr.onerror = function () {
        updateMessage.textContent = 'No se conecto';
        updateMessage.style.color = 'red';
    };
    xhr.send();
}

function ActualizarUsers(event) {
    event.preventDefault();

    const userId = userSelect.value;
    const formData = new FormData(updateUserForm);

    const xhr = new XMLHttpRequest();
    xhr.open('PUT', `${userUrl}/${userId}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 200) {
            updateMessage.textContent = 'Usuario actualizado';
            updateMessage.style.color = 'green';
        } else {
            updateMessage.textContent = 'Error';
            updateMessage.style.color = 'red';
        }
    };

    xhr.onerror = function () {
        updateMessage.textContent = 'No se conecto';
        updateMessage.style.color = 'red';
    };

    const updatedData = {
        name: formData.get('name'),
        email: formData.get('email'),
    };

    xhr.send(JSON.stringify(updatedData));
}