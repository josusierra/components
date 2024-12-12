const gameForm = document.getElementById('gameForm');
const statusDiv = document.getElementById('status');

gameForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(gameForm);

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://intranetjacaranda.es/Ejercicios/games.php', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            statusDiv.textContent = `Respuesta del servidor: ${xhr.responseText}`;
            statusDiv.style.color = 'green';
        } else {
            statusDiv.textContent = 'Error al enviar los datos. Inténtalo nuevamente.';
            statusDiv.style.color = 'red';
        }
    };

    xhr.send(formData);

    gameForm.reset();
});
