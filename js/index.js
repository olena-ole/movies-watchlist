import { formatSearchQuery, displayFilms, KEY, mainDiv } from './utils/utils.js';

const form = document.querySelector('#search-form');
const iconName = 'plus';

function displayResult(data) {
    if (data.Response === 'True') {
        const filmsIdArray = data.Search.map(film => film.imdbID);
        displayFilms(filmsIdArray, iconName);
    } else {
        mainDiv.innerHTML = `
            <div class="inner-container start-container">
                <div class="start">
                    <p class="p-empty">Unable to find what you’re looking for. Please try another search.</p>
                </div>
            </div>
        `;
    };
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formdata = new FormData(form);
    const searchQuery = formatSearchQuery(formdata.get('search-query'));
    
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&t=${searchQuery}&s=${searchQuery}`) 
        .then(res => res.json())
        .then(data => displayResult(data));
});

mainDiv.addEventListener('click', e => {
    if (e.target.classList.contains('toggle-btn')) {
        let myWatchlist = JSON.parse(localStorage.getItem('myWatchlistIds'));
        if (myWatchlist === null) {
            myWatchlist = [];
        };
        myWatchlist.push(e.target.getAttribute('data-id'));
        myWatchlist = [...new Set(myWatchlist)];
        localStorage.setItem('myWatchlistIds', JSON.stringify(myWatchlist));
    };
});
