const playerList = document.querySelector('.players-list');
const players = ['The Kento Momota', 'The Lin Dan', 'Shi YuQi', 'Lee Chong Wei', 'Srikanth Kidambi', 'Won Shon Ho', 'Chen Long', 'The Viktor Axelsen', 'An Anthony Ginting', 'Jonatan Christie', 'A Brice Leverdez', 'Kanta Tsuneyama', 'Kenta Nishimoto', 'Tien Minh Nguyen'];
let hue = 0;

function stripArticles(player) {
    return player.replace(/^(a |the |an )/i, '');
}

const sortedPlayers = players.sort(function(a, b) {
    if (stripArticles(a) > stripArticles(b)) {
        return 1;
    } else {
        return -1;
    }
});

playerList.innerHTML = sortedPlayers.map(function(player) {
    return `<li> ${player} </li>`;
}).join('');

setInterval(function() {
    playerList.style.border = `4px solid hsl(${hue}, 100%, 50%)`;
    hue++;

    if (hue >= 360) {
        hue = 0;
    }
    console.log(hue);
}, 200);