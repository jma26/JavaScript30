const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(event) {
    if (!isDrawing) {
        return;
    }
    console.log(event);
    ctx.beginPath();
    // Start from
    ctx.moveTo(lastX, lastY);
    // Go to
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    [lastX, lastY] = [event.offsetX, event.offsetY];
}

canvas.addEventListener('mousedown', function() {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', function() {
    isDrawing = false;
});
canvas.addEventListener('mouseout', function() {
    isDrawing = false;
})