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


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let index = sections.length;
    while (--index && window.scrollY + 60 < sections[index].offsetTop) { }
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);
