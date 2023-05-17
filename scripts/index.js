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

// Ez a funkció azért szükséges, mert a CSS attr() függvénye jelenleg még
// csak a content property-hez használható.
function attributeToStyleProperty(selector, attribute, property, format = (value) => value) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
        const value = element.getAttribute(attribute);
        if (value)
            element.style.setProperty(property, format(value));
    });
}
attributeToStyleProperty('.contrast-bg', 'data-bg-url', '--bg-image', (value) => `url(${value})`);
attributeToStyleProperty('.section-images__wrapper img', 'data-pos', 'object-position')
