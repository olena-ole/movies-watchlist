import { formatSearchQuery } from './utils/utils.js';

const KEY = '8c2f3c9e';
const form = document.querySelector('#search-form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formdata = new FormData(form);
    const searchQuery = formatSearchQuery(formdata.get('search-query'));
    
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&t=${searchQuery}&s=${searchQuery}`)
        .then(res => res.json())
        .then(data => console.log(data))
})

