import { templates, select } from '../settings.js';
import { utils } from '../utils.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';

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
        thisBooking.dom.datePicker = thisBooking.dom.wrapper.querySelector(select.widgets.datePicker.wrapper);
        thisBooking.dom.hourPicker = thisBooking.dom.wrapper.querySelector(select.widgets.hourPicker.wrapper);
       }

    initWidgets() {
        const thisBooking = this;

        thisBooking.peopleAmountWidget = new AmountWidget(thisBooking.dom.peopleAmount);
        thisBooking.hoursAmountWidget = new AmountWidget(thisBooking.dom.hoursAmount);
        thisBooking.datePicker = new DatePicker(thisBooking.dom.datePicker);
        thisBooking.hourPicker = new HourPicker(thisBooking.dom.hourPicker);

        thisBooking.dom.peopleAmount.addEventListener('updated', function () {

        });
        thisBooking.dom.hoursAmount.addEventListener('updated', function () {

        });
        thisBooking.dom.datePicker.addEventListener('updated', function () {
            thisBooking.datePicker.initPlugin();
        });
        thisBooking.dom.hourPicker.addEventListener('updated', function () {
            thisBooking.hourPicker.initPlugin();
        });
    }
}

export default Booking;