import { templates /*select, settings, classNames*/ } from '../settings.js';
import { utils } from '../utils.js';
// import AmountWidget from './AmountWidget.js';
// import DatePicker from './DatePicker.js';
// import HourPicker from './HourPicker.js';

class HomePage {
    constructor(element) {
        const thisBooking = this;

        thisBooking.render(element);
        // thisBooking.initWidgets();
        // thisBooking.getData();
    }

    render(element) {
        const thisBooking = this;

        const generatedHTML = templates.homePage();

        thisBooking.dom = {};

        thisBooking.dom.wrapper = element;

        /* Create element using utils.createElementFromHTML */
        thisBooking.element = utils.createDOMFromHTML(generatedHTML);

        /* Add element to #menu */
        thisBooking.dom.wrapper.innerHTML = generatedHTML;
    }
}

export default HomePage;