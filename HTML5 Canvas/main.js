const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 4;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(event) {
    // Stop function from running if false or not 'mousedown'
    if (!isDrawing) {
        return;
    }
    console.log(event);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%`;
    ctx.beginPath();
    // Start from
    ctx.moveTo(lastX, lastY);
    // Go to
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    [lastX, lastY] = [event.offsetX, event.offsetY];
    // Reset hue if greater than 360
    if (hue >= 360) {
        hue = 0;
    }
    hue++;
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