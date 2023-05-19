document.querySelectorAll('.section-images__wrapper')
    .forEach((item) =>
        item.addEventListener('click', (e) => {
            if (item.classList.contains('section-images__wrapper-large') && e.target !== item)
                return;
            item.classList.toggle('section-images__wrapper-large');
        }));

attributeToStyleProperty('.section-images__wrapper img', 'data-pos', 'object-position');
