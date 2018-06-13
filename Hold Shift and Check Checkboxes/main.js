let checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

function handleCheck(event) {
    console.log(event);
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

console.log(checkboxes);