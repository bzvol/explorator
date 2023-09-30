// Mivel a section elemeknek nincsen meghatározott magasságuk (csak minimum),
// így az .order-indicator elemek nem tudnak 100% magasságot felvenni.
function updateOrderIndicatorsHeight() {
    const orderIndicators = document.querySelectorAll('.order-indicator');
    orderIndicators.forEach(el => el.style.setProperty('height', `${el.parentElement.offsetHeight}px`));
}
updateOrderIndicatorsHeight();
updateTripsEvent = updateOrderIndicatorsHeight;

const planes = document.querySelectorAll('.order-indicator__plane');
planes[planes.length - 1].style.setProperty('display', 'none');

attributeToStyleProperty('.trip-box__gallery img', 'data-pos', 'object-position');