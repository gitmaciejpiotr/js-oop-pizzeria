import {settings, select} from '../settings.js';

class AmountWidget {
  constructor(element) {
    const thisWidget = this;

    thisWidget.getElements(element);
    if (thisWidget.dom.input.value === '') {
      thisWidget.setValue(settings.amountWidget.defaultValue);
    } else {
      thisWidget.setValue(thisWidget.dom.input.value);
    }
    thisWidget.initActions();
  }

  getElements(element) {
    const thisWidget = this;
    thisWidget.dom = {};

    thisWidget.dom.element = element;
    thisWidget.dom.input = thisWidget.dom.element.querySelector(select.widgets.amount.input);
    thisWidget.dom.linkDecrease = thisWidget.dom.element.querySelector(select.widgets.amount.linkDecrease);
    thisWidget.dom.linkIncrease = thisWidget.dom.element.querySelector(select.widgets.amount.linkIncrease);
  }

  setValue(value) {
    const thisWidget = this;

    const newValue = parseInt(value);
    const conditions = thisWidget.value !== newValue
      && !isNaN(newValue)
      && newValue >= settings.amountWidget.defaultMin
      && newValue <= settings.amountWidget.defaultMax;

    /* TODO */

    if (conditions) {
      thisWidget.value = newValue;
      thisWidget.announce();
    }
    thisWidget.dom.input.value = thisWidget.value;
  }

  initActions() {
    const thisWidget = this;

    thisWidget.dom.input.addEventListener('change', function () {
      thisWidget.setValue(thisWidget.dom.input.value);
    });
    thisWidget.dom.linkDecrease.addEventListener('click', function (event) {
      event.preventDefault();
      thisWidget.setValue(thisWidget.value - 1);
    });
    thisWidget.dom.linkIncrease.addEventListener('click', function (event) {
      event.preventDefault();
      thisWidget.setValue(thisWidget.value + 1);
    });
  }

  announce() {
    const thisWidget = this;

    const event = new CustomEvent('updated', {
      bubbles: true
    })
    thisWidget.dom.element.dispatchEvent(event);
  }
}

export default AmountWidget;