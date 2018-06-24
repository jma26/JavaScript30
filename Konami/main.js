const pressed = [];
const secretWord = 'Angular';

window.addEventListener('keyup', function(event) {
    console.log('1:',pressed);
    console.log(event);
    pressed.push(event.key);
    console.log('2:',pressed);
    pressed.splice(0, pressed.length - secretWord.length);
    // Or pressed.splice(-secretWord.length - 1, pressed.length - secretWord.length);
    
    // NOTE: pressed.length - secretWord.length always makes sure array is at a length of 7 because we're constantly removing 1 when we add ONE more to the aray when pushing event.key
    console.log(pressed);
})