fetch('https://intranetjacaranda.es/Ejercicios/games.php')
.then(response => {
    console.log(response);
    return response.json();
})
.then(posts=> {
    fetch(`https://intranetjacaranda.es/Ejercicios/games.php/${title=""}&${genre=""}&${description=""}&${price=1}`)
})
.then(response => response.json())
.then(game => console.log(game.title))
.catch(error => console.log("error: ", error))