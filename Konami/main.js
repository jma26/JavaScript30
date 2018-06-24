const pressed = [];
const secretWord = 'Angular';

window.addEventListener('keyup', function(event) {
    console.log(event);
    pressed.push(event.key);
    console.log(pressed);
    console.log(secretWord.length);
})