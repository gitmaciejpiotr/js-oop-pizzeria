import { templates, select } from '../settings.js';
import { utils } from '../utils.js';
import AmountWidget from './AmountWidget.js';

class Booking {
    constructor(element) {
        const thisBooking = this;

        thisBooking.render(element);
        thisBooking.initWidgets();
    }

    render(element) {
        const thisBooking = this;

        const generatedHTML = templates.bookingWidget();

        thisBooking.dom = {};

        thisBooking.dom.wrapper = element;

        /* Create element using utils.createElementFromHTML */
        thisBooking.element = utils.createDOMFromHTML(generatedHTML);

        /* Add element to #menu */
        thisBooking.dom.wrapper.innerHTML = generatedHTML;

        thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
        thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
       }

    initWidgets() {
        const thisBooking = this;

        console.log('Heja', thisBooking.dom.peopleAmount);

        thisBooking.peopleAmountWidget = new AmountWidget(thisBooking.dom.peopleAmount);
        thisBooking.hoursAmountWidget = new AmountWidget(thisBooking.dom.hoursAmount);

        thisBooking.dom.peopleAmount.addEventListener('updated', function () {

        });
        thisBooking.dom.hoursAmount.addEventListener('updated', function () {

        });
    }
}

export default Booking;