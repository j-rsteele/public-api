document.getElementById('filmsButton').addEventListener('click', getStarWarsFilms);
document.getElementById('starShipsButton').addEventListener('click', getStarShips);
document.getElementById('charactersButton').addEventListener('click', getCharacters);


function getCharacters(){

    fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        const chars = data.results.map(char => {
             return `
             <h4>${char.name}</h4>
             <p>Birth Year: ${char.birth_year}</p><hr>
             `;
        }).join(" ");
        console.log(chars);
        document.getElementById('characters').innerHTML = chars;

    })
    .catch(err => console.log(err));
}


function getStarWarsFilms(){
    fetch('https://swapi.dev/api/films/')
    .then(response => response.json())
    .then(data => {
        const html = data.results.map(film => {
            return `
            <h4>${film.title}: Episode ${film.episode_id}</h4>
            <p class="text">${film.opening_crawl}</p>
            `;
        }).join(" ");
        console.log(html);
        document.getElementById('films').innerHTML = html;
    })
    .catch(err => console.log(err));
}


function getStarShips(){
    fetch('https://swapi.dev/api/starships/')
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        const ship = data.results.map(ships => {
             return `
             <h4>${ships.name}</h4>
             <p>Model: ${ships.model}</p>
             <p>Starship Class: ${ships.starship_class}</p><hr>
             `;
        }).join(" ");
        console.log(ship);
        document.getElementById('ships').innerHTML = ship;
    })
    .catch(err => console.log(err));
}









