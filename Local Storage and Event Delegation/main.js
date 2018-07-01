const foodForm = document.querySelector('.food-form');
const foodValue = document.querySelector('input[name="item"]');
const itemHTML = document.querySelector('.item-list');
const foodList = [];

function addToList(event) {
    event.preventDefault();
    const food = {
        text: foodValue.value,
        done: false
    };
    foodList.push(food);
    console.log(foodList);
    populateList(foodList);
}

function populateList(foods) {
    itemHTML.innerHTML = '';
    foods.map(function(food, index) {
        itemHTML.innerHTML += `
            <li class="item">
                <input type="checkbox" data-index=${index} id="item${index}" ${food.done ? 'checked' : ''}>
                <label for="item${index}"> ${food.text} </label> 
            </li>
                `
    })
}

foodForm.addEventListener('submit', addToList);
