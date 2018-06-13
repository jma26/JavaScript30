let checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(event) {
    let inBetween = false;
    if (event.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them inbetween');
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

// Step by step explanation of handleCheck()
// First, lastChecked is overwritten by individual clicks without the shift key
// Second, when shiftKey is pressed, it fires off and checks iterates all the checkboxes
// Third, checkbox === this refers to the checkbox you clicked on while holding shift
// Fourth, checkbox === lastChecked is the last checkbox you clicked without the shift key


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

console.log(checkboxes);