const panels = document.querySelectorAll('.panel');

function toggleActive() {
    console.log('Hello');
    this.classList.toggle('active');
}

panels.forEach(panel => panel.addEventListener('click', toggleActive));

