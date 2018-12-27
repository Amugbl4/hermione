const assert = require('chai').assert;

hermione.skip.notIn('ie11', "it for ie11");
describe('fullscreen pages', function () {
    it('main', function () {
        return this.browser
            .url('/en/')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core', { ignoreElements: ['body > div.wrapper > section.bg-blue.d-none.d-sm-block.pb-sm-2 > div > div'] })
    });
    
    it('parking', function () {
        return this.browser
            .url('/en/parking')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('food&shopping', function () {
        return this.browser
            .url('/en/services/food-and-shopping')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });
    
    it('food&shopping-detail', function () {
        return this.browser
            .url('/en/services/food-and-shopping/heinemann-travel-value/')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    })

    it('registration', function () {
        return this.browser
            .url('/en/registration')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('news-detail', function () {
        return this.browser
            .url('/en/about/news/novye-pravila-polzovaniya-parkovochnym-kompleksom-c-17-dekab/')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });
    
    it('history', function () {
        return this.browser
            .url('/en/about/history/')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('businesshall', function () {
        return this.browser
            .url('/en/services/businesshall/')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });
    
    it('vip', function () {
        return this.browser
            .url('/en/services/vip/')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('vip-booking', function () {
        return this.browser
            .url('/en/services/vip/booking/')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('scheme', function () {
        return this.browser
            .url('/en/scheme/')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('luggage', function () {
        return this.browser
            .url('/en/services/luggage/')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .click('#heading0 > button')
            .assertView('plain', '.bx-core')
    });

    it('rules', function () {
        return this.browser
            .url('/en/rules/predpoletnyy-kontrol/')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('managment', function () {
        return this.browser
            .url('/en/contacts/management/')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('companies', function () {
        return this.browser
            .url('/en/contacts/companies/')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('feedback', function () {
        return this.browser
            .url('/en/feedback/')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('menu', function () {
        return this.browser
            .url('/en/')
            .click('body > div.wrapper > header > div > div > div > div.header-col.ml-auto.fx-ai-center--xs > span.hdr-link.hdr-link--nav.js-nav-btn')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.nav')
    });

    it('menu-partners', function () {
        return this.browser
            .url('/en/')
            .click('body > div.wrapper > header > div > div > div > div.header-col.ml-auto.fx-ai-center--xs > span.hdr-link.hdr-link--nav.js-nav-btn')
            .click('body > div.wrapper > header > div > div > div > div.header-col.header-col--first.header-col--opened.js-tab > span.hdr-link.hdr-link-tab.js-tab__btn.hdr-link--b')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.nav')
    });

    it('partner-airlines', function () {
        return this.browser
            .url('/en/partners/airlines/airport/')
            .click('#bx_651765591_1184')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('partner-electro-territory', function () {
        return this.browser
            .url('/en/partners/electro/territory/')
            .click('#heading0 > button')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('search', function () {
        return this.browser
            .url('/en/search')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

});
