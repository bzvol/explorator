const body = document.querySelector('body');
window.addEventListener('load', () => body.classList.remove('preload'));

const nav = document.querySelector('.header__nav');
document.querySelectorAll('.header__nav-toggle')
    .forEach((item) => 
        item.addEventListener('click', () => 
            nav.classList.toggle('header__nav-active')));

const lsmBtn = document.querySelector('.header__nav-lsm-btn');
let largeScaleMode = false;
let updateTripsEvent = null;
lsmBtn.addEventListener('click', () => {
    largeScaleMode = !largeScaleMode;
    const rootStyle = document.documentElement.style;
    if (largeScaleMode) {
        rootStyle.setProperty('font-size', '30px');
        rootStyle.setProperty('filter', 'contrast(120%)');
    }
    else {
        rootStyle.removeProperty('font-size');
        rootStyle.removeProperty('filter');
    }
    
    if (updateTripsEvent)
        updateTripsEvent();
});

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
attributeToStyleProperty('.contrast-bg', 'data-bg-pos', '--bg-position');
