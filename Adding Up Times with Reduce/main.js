const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes.map(function(node) {
    return node.dataset.time
}).map(function(timeCode) {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
}).reduce(function(total, seconds) {
    return total + seconds
});

let secondsLeft = seconds;
// Get hours
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
// Get minutes
const mins = Math.floor(secondsLeft / 60);
// Get seconds
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);



