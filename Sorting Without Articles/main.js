const players = ['The Kento Momota', 'The Lin Dan', 'Shi YuQi', 'Lee Chong Wei', 'Srikanth Kidambi', 'Won Shon Ho', 'Chen Long', 'The Viktor Axelsen', 'An Anthony Ginting', 'Jonatan Christie', 'A Brice Leverdez', 'Kanta Tsuneyama', 'Kenta Nishimoto', 'Tien Minh Nguyen'];

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