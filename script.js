const slider = document.querySelector('.slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let scrollAmount = 0;

next.addEventListener('click', () => {
    slider.scrollBy({ left: 320, behavior: 'smooth' });
});

prev.addEventListener('click', () => {
    slider.scrollBy({ left: -320, behavior: 'smooth' });
});
