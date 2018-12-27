const assert = require('chai').assert;


describe('fullscreen pages(not ie)', function () {

    it('main(not ie)', function () {
        return this.browser
            .url('/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core', { ignoreElements: ['body > div.wrapper > section.bg-blue.d-none.d-sm-block.pb-sm-2 > div > div'] })
    });
 
    it('parking(not ie)', function () {
        return this.browser
            .url('/parking')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });
    
    it('food&shopping', function () {
        return this.browser
            .url('/services/food-and-shopping')

            .assertView('plain', '.bx-core')
    });
    
    it('food&shopping-detail', function () {
        return this.browser
            .url('/services/food-and-shopping/heinemann-travel-value/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    })

    it('registration', function () {
        return this.browser
            .url('/registration')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('news-detail', function () {
        return this.browser
            .url('/about/news/novye-pravila-polzovaniya-parkovochnym-kompleksom-c-17-dekab/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });
    
    it('history', function () {
        return this.browser
            .url('/about/history/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('businesshall', function () {
        return this.browser
            .url('/services/businesshall/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });
    
    it('vip', function () {
        return this.browser
            .url('/services/vip/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('vip-booking', function () {
        return this.browser
            .url('/services/vip/booking/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('scheme', function () {
        return this.browser
            .url('/scheme/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('luggage', function () {
        return this.browser
            .url('/services/luggage/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .click('#heading0 > button')
            .assertView('plain', '.bx-core')
    });

    it('rules', function () {
        return this.browser
            .url('/rules/predpoletnyy-kontrol/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('managment', function () {
        return this.browser
            .url('/contacts/management/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('companies', function () {
        return this.browser
            .url('/contacts/companies/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('feedback', function () {
        return this.browser
            .url('/feedback/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('menu', function () {
        return this.browser
            .url('/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .click('body > div.wrapper > header > div > div > div > div.header-col.ml-auto.fx-ai-center--xs > span.hdr-link.hdr-link--nav.js-nav-btn')
            .assertView('plain', '.nav')
    });

    it('menu-partners', function () {
        return this.browser
            .url('/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .click('body > div.wrapper > header > div > div > div > div.header-col.ml-auto.fx-ai-center--xs > span.hdr-link.hdr-link--nav.js-nav-btn')
            .click('body > div.wrapper > header > div > div > div > div.header-col.header-col--first.header-col--opened.js-tab > span.hdr-link.hdr-link-tab.js-tab__btn.hdr-link--b')
            .assertView('plain', '.nav')
    });

    it('partner-airlines', function () {
        return this.browser
            .url('/partners/airlines/airport/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .click('#bx_651765591_1184')
            .assertView('plain', '.bx-core')
    });

    it('partner-electro-territory', function () {
        return this.browser
            .url('/partners/electro/territory/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .click('#heading0 > button')
            .assertView('plain', '.bx-core')
    });

    it('search', function () {
        return this.browser
            .url('/search')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

});    

