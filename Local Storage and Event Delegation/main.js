const foodForm = document.querySelector('.food-form');
const foodValue = document.querySelector('input[name="item"]');
const itemHTML = document.querySelector('.item-list');
const foodList = JSON.parse(localStorage.getItem('foodList')) || [];

function addToList(event) {
    event.preventDefault();
    const food = {
        text: foodValue.value,
        done: false
    };
    foodList.push(food);
    populateList(foodList);
    // Local Storage
    localStorage.setItem('foodList', JSON.stringify(foodList));
    // Reset form values
    this.reset();
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

function toggleDone(event) {
    if (!event.target.matches('input')) return;
    const el = event.target;
    const index = el.dataset.index;
    foodList[index].done = !foodList[index].done;
    // Local Storage
    localStorage.setItem('foodList', JSON.stringify(foodList));
    populateList(foodList);
}

populateList(foodList);

foodForm.addEventListener('submit', addToList);
itemHTML.addEventListener('click', toggleDone);
