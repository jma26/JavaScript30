const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(event) {
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    let x = event.offsetX;
    let y = event.offsetY;


    if (this !== event.target) {
        x = x + event.target.offsetLeft;
        y = y + event.target.offsetTop;
    }

    const xWalk = Math.round((x/ x * width) - (walk / 2));
    const yWalk = Math.round((y/ y * height) - (walk / 2));
    
}

hero.addEventListener('mousemove', shadow);