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
function getValue() {
    displayData(this.value, data);
}

// Display data
function displayData(searchWord, data) {
    // Filter out the data with searchWord
    let searchFilter = new RegExp(searchWord, 'gi');
}

searchInput.addEventListener('keyup', getValue);