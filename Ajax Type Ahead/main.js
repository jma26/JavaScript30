const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let data = [];

fetch(endpoint)
.then((response) => {
    return response.json();
})
.then((jsonData) => {
    data.push(...jsonData);
});

let searchInput = document.querySelector('.search-box');

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
    console.log(results);
}

searchInput.addEventListener('keyup', displayData);