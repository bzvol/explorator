const formDateFrom = document.querySelector('#k__date-from');
const formDateTill = document.querySelector('#k__date-till');
const today = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
const plusFourDays = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
formDateFrom.value = today.toISOString().slice(0, 10);
formDateTill.value = plusFourDays.toISOString().slice(0, 10);

function convertDateFormat(dateString) {
    var date = new Date(dateString);
    var year = date.getFullYear().toString().slice(-2);
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
  
    return year + month + day;
}

const form = document.querySelector('#k__form');
form.onsubmit = (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const from = data.get('from'),
          to = data.get('to'),
          dateFrom = convertDateFormat(data.get('date-from')),
          dateTill = convertDateFormat(data.get('date-till')),
          passengers = data.get('passengers'),
          cabinClass = data.get('cabinclass');

    console.log(from, to, dateFrom, dateTill, passengers, cabinClass);

    const url = `https://www.skyscanner.com/transport/flights/${from}/${to}/${dateFrom}/${dateTill}/?adultsv2=${passengers}&cabinclass=${cabinClass}`;
    window.open(url, '_blank');
};
