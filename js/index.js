import { formatSearchQuery } from './utils/utils.js';

const KEY = '8c2f3c9e';
const form = document.querySelector('#search-form');
const mainContent = document.querySelector('#main-content');

// Actors: "Greta Gerwig, Zoe Lister-Jones, Hamish Linklater"
// Awards: "2 nominations"
// BoxOffice: "$252,603"
// Country: "United States"
// DVD: "11 Sep 2012"
// Director: "Daryl Wein"
// Genre: "Comedy"
// Language: "English"
// Metascore: "49"
// Plot: "Dumped by her boyfriend just three weeks before their wedding, Lola enlists her close friends for a series of adventures she hopes will help her come to terms with approaching 30 as a single woman."
// Poster: "https://m.media-amazon.com/images/M/MV5BMTA5MjQ1MzE2NzNeQTJeQWpwZ15BbWU3MDk2ODkzNjc@._V1_SX300.jpg"
// Production: "N/A"
// Rated: "R"
// Ratings: Array(3)
// 0: {Source: 'Internet Movie Database', Value: '5.4/10'}
// 1: {Source: 'Rotten Tomatoes', Value: '36%'}
// 2: {Source: 'Metacritic', Value: '49/100'}
// length: 3
// [[Prototype]]: Array(0)
// Released: "08 Jun 2012"
// Response: "True"
// Runtime: "87 min"
// Title: "Lola Versus"
// Type: "movie"
// Website: "N/A"
// Writer: "Zoe Lister-Jones, Daryl Wein"
// Year: "2012"
// imdbID: "tt1710417"
// imdbRating: "5.4"
// imdbVotes: "8,733"


function displayFilms(data) {
    if (data.Response === 'True') {
        console.log(data);
        const filmsIdArray = data.Search.map(film => film.imdbID);
        let filmsHtml = '';
        filmsIdArray.forEach(film => {
            fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${id}`)
            .then(res => res.json())
            .then(data => console.log(data));
        });
    } else {
        mainContent.innerHTML = `
            <div class="start">
                <p class="p-empty">Unable to find what you’re looking for. Please try another search.</p>
            </div>
        `;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formdata = new FormData(form);
    const searchQuery = formatSearchQuery(formdata.get('search-query'));
    
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&t=${searchQuery}&s=${searchQuery}`) 
        .then(res => res.json())
        .then(data => displayFilms(data));
})

