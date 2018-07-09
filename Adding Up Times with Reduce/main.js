const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes.map(function(node) {
    return node.dataset.time
}).map(function(timeCode) {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    console.log(mins, secs);
    return (mins * 60) + secs;
})

