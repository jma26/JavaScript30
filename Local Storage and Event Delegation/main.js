const foodForm = document.querySelector('.food-form');
const foodValue = document.querySelector('input[name="item"]');
const itemHTML = document.querySelector('.list-container');
const foodList = [];

function addToList(event) {
    event.preventDefault();
    foodList.push(foodValue.value);
    populateList(foodList);
}

function populateList(foods) {
    itemHTML.innerHTML = '';
    foods.map(function(food, index) {
        itemHTML.innerHTML += `
            <ul class="item-list"> 
                <li> ${food} </li>
            </ul>`
    })
}

foodForm.addEventListener('submit', addToList);
