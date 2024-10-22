document.getElementById("JokeButton").addEventListener('click', async() =>{
    try{
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json();

        document.getElementById("jokeResult").innerText = data.value;
    } catch(error){
        document.getElementById("jokeResult").innerText = "Error al obtener chiste";
        console.error(error);
    }
});