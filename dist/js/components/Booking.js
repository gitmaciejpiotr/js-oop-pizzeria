import { templates, select } from '../settings.js';
import { utils } from '../utils.js';
import AmountWidget from './AmountWidget.js';

class Booking {
    constructor(element) {
        const thisBooking = this;

        thisBooking.getElements(element);
        thisBooking.render(element);
        thisBooking.initWidgets();
    }

    getElements(element) {
        const thisBooking = this;
        thisBooking.dom = {};

        thisBooking.dom.wrapper = element;
        thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
        thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
    }

    render() {
        const thisBooking = this;

        const generatedHTML = templates.bookingWidget();

        /* Create element using utils.createElementFromHTML */
        thisBooking.element = utils.createDOMFromHTML(generatedHTML);

        /* Add element to #menu */
        thisBooking.dom.wrapper.innerHTML = generatedHTML;
    }

    initWidgets() {
        const thisBooking = this;

        thisBooking.peopleAmountWidget = new AmountWidget(thisBooking.dom.peopleAmount);
        thisBooking.hoursAmountWidget = new AmountWidget(thisBooking.dom.hoursAmount);

        thisBooking.dom.peopleAmount.addEventListener('updated', function () {

        });
        thisBooking.dom.hoursAmount.addEventListener('updated', function () {

        });
    }
}

export default Booking;