
import { mainDiv, displayFilms } from './utils/utils.js'
const iconName = 'minus'

let myWatchlist = JSON.parse(localStorage.getItem('myWatchlistIds'));
console.log(myWatchlist);

if (myWatchlist === null) {
    myWatchlist = [];
};

if (myWatchlist.length === 0) {
    mainDiv.innerHTML = `
        <div class="inner-container start-container">
            <div class="start">
                <p class="p-empty">Your watchlist is looking a little empty...</p>
                <div class="add-wrapper">
                    <a href="./index.html" class="add-link"><img src="icons/plus.png" alt="a plus"></a>
                    <p class="add-p">Let’s add some movies!</p>
                </div>
                
            </div>
        </div>
    `;
} else {
    displayFilms(myWatchlist, iconName);
};