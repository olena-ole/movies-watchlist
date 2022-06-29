
const KEY = '8c2f3c9e';
const mainDiv = document.querySelector('#main-div');

function formatSearchQuery(str) {
    return str.split(' ').join('+');
}

function displayFilms(arr, icon) {
    let filmsHtml = '';
        arr.forEach(filmId => {
            fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${filmId}`)
            .then(res => res.json())
            .then(data => {
                filmsHtml += `
                    <div class="film">
                        <div class="film-poster-wrapper">
                            <img src="${data.Poster}" alt="film poster" class="film-poster">
                        </div>
                        <div class="film-descr">
                            <div class="film-header">
                                <h4 class="film-title">${data.Title}</h4>
                                <img src="./icons/star.png" alt="">
                                <p class="rate">${data.imdbRating}</p>
                            </div>
                            <div class="film-details">
                                <p>${data.Runtime}</p>
                                <p>Comedy</p>
                                <div class="toggle-to-watchlist">
                                    <img src="./icons/${icon}.png" alt="" class="toggle-btn" data-id="${data.imdbID}">
                                    <a href="./watchlist.html">Watchlist</a>
                                </div>
                            </div>
                            <p class="film-plot">${data.Plot}</p>
                        </div>
                    </div>
                `;
                mainDiv.innerHTML = `
                    <div class="inner-container inner-container-main" id="main-content">
                        <div class="films">${filmsHtml}</div>
                    </div>
                `;
            });
        });
};

export {formatSearchQuery, displayFilms, KEY, mainDiv};