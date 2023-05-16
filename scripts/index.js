const body = document.querySelector('body');
window.addEventListener('load', () => body.classList.remove('preload'));

const nav = document.querySelector('.header__nav');
document.querySelectorAll('.header__nav-toggle')
    .forEach((item) => 
        item.addEventListener('click', () => 
            nav.classList.toggle('header__nav-active')));

document.querySelectorAll('.section-images__wrapper')
    .forEach((item) =>
        item.addEventListener('click', (e) => {
            if (item.classList.contains('section-images__wrapper-large') && e.target !== item)
                return;
            item.classList.toggle('section-images__wrapper-large');
        }));
