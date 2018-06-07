const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let data = [];

fetch(endpoint)
.then((response) => {
    return response.json();
})
.then((jsonData) => {
    data.push(...jsonData);
});

const searchInput = document.querySelector('.search-box');
const resultsHTML = document.querySelector('.results');

// Get input value of search-box
function getMatches(searchWord, data) {
    return data.filter((result) => {
         // Regular Expression set up
        let searchFilter = new RegExp(searchWord, 'gi');
        return result.city.match(searchFilter) || result.state.match(searchFilter);
    })
}

// Display data
function displayData() {
    let results = getMatches(this.value, data);
    let html = results.map((result) => {
        let regex = new RegExp(this.value, 'gi');
        let cityName = result.city.replace(regex, `<span class="highlight">${this.value}</span>`);
        let stateName = result.state.replace(regex, `<span class="highlight">${this.value}</span>`);
        return `<li class="matchResults">
        <p class="name"> ${cityName}, ${stateName} </p>
        <p class="population"> ${result.population} </p>
        <p class="rank"> Ranking: ${result.rank} </p> </li>`;
    }).join('');
    resultsHTML.innerHTML = html;
}

searchInput.addEventListener('keyup', displayData);