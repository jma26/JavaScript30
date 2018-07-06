const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(event) {
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    let x = event.offsetX;
    let y = event.offsetY;

    if (this !== event.target) {
        x = x + event.target.offsetLeft;
        y = y + event.target.offsetTop;
    }
    console.log(x, y);
}

hero.addEventListener('mousemove', shadow);