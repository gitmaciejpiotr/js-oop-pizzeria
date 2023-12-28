export const select = {
    templateOf: {
        homePage: '#template-home-page',
        menuProduct: '#template-menu-product',
        cartProduct: '#template-cart-product',
        bookingWidget: '#template-booking-widget',
    },
    containerOf: {
        menu: '#product-list',
        cart: '#cart',
        pages: '#pages',
        booking: '.booking-wrapper',
        home: '.home-page-wrapper',
    },
    all: {
        menuProducts: '#product-list > .product',
        menuProductsActive: '#product-list > .product.active',
        formInputs: 'input, select',
    },
    menuProduct: {
        clickable: '.product__header',
        form: '.product__order',
        priceElem: '.product__total-price .price',
        imageWrapper: '.product__images',
        amountWidget: '.widget-amount',
        cartButton: '[href="#add-to-cart"]',
    },
    widgets: {
        amount: {
            input: 'input.amount', // CODE CHANGED
            linkDecrease: 'a[href="#less"]',
            linkIncrease: 'a[href="#more"]',
        },
        datePicker: {
            wrapper: '.date-picker',
            input: `input[name="date"]`,
        },
        hourPicker: {
            wrapper: '.hour-picker',
            input: 'input[type="range"]',
            output: '.output',
        },
    },
    booking: {
        peopleAmount: { 
            wrapper: '.people-amount',
            input: '.people-amount input',
        },
        hoursAmount: { 
            wrapper: '.hours-amount',
            input: '.hours-amount input',
        },
        tables: {
            table: '.floor-plan .table',
            wrapper: '.floor-plan',
        },
        form: '.booking-form',
        address: '[name="address"]',
        phone: '[name="phone"]',
        starterContainer: '.booking-options .option-row',
    },
    nav: {
        links: '.main-nav a',
    },
    // CODE ADDED START
    cart: {
        productList: '.cart__order-summary',
        toggleTrigger: '.cart__summary',
        totalNumber: `.cart__total-number`,
        totalPrice: '.cart__total-price strong, .cart__order-total .cart__order-price-sum strong',
        subtotalPrice: '.cart__order-subtotal .cart__order-price-sum strong',
        deliveryFee: '.cart__order-delivery .cart__order-price-sum strong',
        form: '.cart__order',
        formSubmit: '.cart__order [type="submit"]',
        phone: '[name="phone"]',
        address: '[name="address"]',
    },
    cartProduct: {
        amountWidget: '.widget-amount',
        price: '.cart__product-price',
        edit: '[href="#edit"]',
        remove: '[href="#remove"]',
    },
    homePage: {
        gallery: '.gallery',
    }
    // CODE ADDED END
};

export const classNames = {
    menuProduct: {
        wrapperActive: 'active',
        imageVisible: 'active',
    },
    // CODE ADDED START
    cart: {
        wrapperActive: 'active',
    },
    // CODE ADDED END
    booking: {
        loading: 'loading',
        tableBooked: 'booked',
    },
    nav: {
        active: 'active',
    },
    pages: {
        active: 'active',
    }
};

export const settings = {
    amountWidget: {
        defaultValue: 1,
        defaultMin: 1,
        defaultMax: 9,
    }, // CODE CHANGED
    // CODE ADDED START
    cart: {
        defaultDeliveryFee: 20,
    },
    hours: {
        open: 12,
        close: 24,
    },
    datePicker: {
        maxDaysInFuture: 14,
    },
    booking: {
        tableIdAttribute: 'data-table',
    },
    // CODE ADDED END
    db: {
        url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
        products: 'products',
        orders: 'orders',
        bookings: 'bookings',
        events: 'events',
        dateStartParamKey: 'date_gte',
        dateEndParamKey: 'date_lte',
        notRepeatParam: 'repeat=false',
        repeatParam: 'repeat_ne=false',
    },
};

export const templates = {
    homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),

    menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
    // CODE ADDED START
    cartProduct: Handlebars.compile(document.querySelector(select.templateOf.cartProduct).innerHTML),
    // CODE ADDED END
    bookingWidget: Handlebars.compile(document.querySelector(select.templateOf.bookingWidget).innerHTML),
};