const player = document.querySelector('.player');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress-filled');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.slider');

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

video.addEventListener('click', togglePlay);

