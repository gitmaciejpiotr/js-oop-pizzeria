import { templates, select /*settings, classNames*/ } from '../settings.js';
import { utils } from '../utils.js';
// import AmountWidget from './AmountWidget.js';
// import DatePicker from './DatePicker.js';
// import HourPicker from './HourPicker.js';

class HomePage {
    constructor(element) {
        const thisHomePage = this;

        thisHomePage.favoriteImages = [];

        thisHomePage.render(element);
        thisHomePage.initActions();
        // thisBooking.initWidgets();
        // thisBooking.getData();
    }

    render(element) {
        const thisHomePage = this;

        const generatedHTML = templates.homePage();

        thisHomePage.dom = {};

        thisHomePage.dom.wrapper = element;

        /* Create element using utils.createElementFromHTML */
        thisHomePage.element = utils.createDOMFromHTML(generatedHTML);

        /* Add element to #menu */
        thisHomePage.dom.wrapper.innerHTML = generatedHTML;

        thisHomePage.dom.gallery = thisHomePage.dom.wrapper.querySelector(select.homePage.gallery);
    }

    initActions() {
        const thisHomePage = this;
    
        thisHomePage.dom.gallery.addEventListener('click', function (event) {
          event.preventDefault();
          if (event.target.offsetParent.classList.contains('layer') && (event.target.classList.contains('fa-heart-o') || event.target.classList.contains('fa-heart'))) {
            thisHomePage.addToFavorite(event);
          }
        });
    }

    addToFavorite(event) {
   
        /* Find book image in clicked element */
        const imageLikeButton = event.target;

        if (!imageLikeButton.classList.contains('liked')) {
          imageLikeButton.classList.add('liked');
          imageLikeButton.classList.remove('fa-heart-o');
          imageLikeButton.classList.add('fa-heart');
        } else {
          imageLikeButton.classList.remove('liked');
          imageLikeButton.classList.add('fa-heart-o');
          imageLikeButton.classList.remove('fa-heart');
        }
      }
}

export default HomePage;