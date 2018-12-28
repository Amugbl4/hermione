const assert = require('chai').assert;


describe('fullscreen pages(not ie)', function () {

    it('main(not ie)', function () {
        return this.browser
            .url('/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core', { ignoreElements: ['body > div.wrapper > section.bg-blue.d-none.d-sm-block.pb-sm-2 > div > div'] })
    });
 
    it('parking(not ie)', function () {
        return this.browser
            .url('/en/parking')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });
    
    it('food&shopping', function () {
        return this.browser
            .url('/en/services/en/food-and-shopping')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });
    
    it('food&shopping-detail', function () {
        return this.browser
            .url('/en/services/en/food-and-shopping/en/heinemann-travel-value/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    })

    it('registration', function () {
        return this.browser
            .url('/en/registration')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('news-detail', function () {
        return this.browser
            .url('/en/about/en/news/en/novye-pravila-polzovaniya-parkovochnym-kompleksom-c-17-dekab/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });
    
    it('history', function () {
        return this.browser
            .url('/en/about/en/history/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('businesshall', function () {
        return this.browser
            .url('/en/services/en/businesshall/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });
    
    it('vip', function () {
        return this.browser
            .url('/en/services/en/vip/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('vip-booking', function () {
        return this.browser
            .url('/en/services/en/vip/en/booking/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('scheme', function () {
        return this.browser
            .url('/en/scheme/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('luggage', function () {
        return this.browser
            .url('/en/services/en/luggage/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
            .click('#accordion > div:nth-child(1)')
            .assertView('open_accord', '.bx-core')
        });

    it('rules', function () {
        return this.browser
            .url('/en/rules/en/predpoletnyy-kontrol/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('managment', function () {
        return this.browser
            .url('/en/contacts/en/management/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('companies', function () {
        return this.browser
            .url('/en/contacts/en/companies/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('feedback', function () {
        return this.browser
            .url('/en/feedback/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

    it('menu', function () {
        return this.browser
            .url('/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .click('body > div.wrapper > header > div > div > div > div.header-col.ml-auto.fx-ai-center--xs > span.hdr-link.hdr-link--nav.js-nav-btn')
            .assertView('plain', '.nav')
    });

    it('menu-partners', function () {
        return this.browser
            .url('/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .click('body > div.wrapper > header > div > div > div > div.header-col.ml-auto.fx-ai-center--xs > span.hdr-link.hdr-link--nav.js-nav-btn')
            .waitForVisible('body > div.wrapper > header > div > div > div > div.header-col.header-col--first.header-col--opened.js-tab > span.hdr-link.hdr-link-tab.js-tab__btn.hdr-link--b', 2000)
            .click('body > div.wrapper > header > div > div > div > div.header-col.header-col--first.header-col--opened.js-tab > span.hdr-link.hdr-link-tab.js-tab__btn.hdr-link--b')
            .assertView('plain', '.nav')
    });

    it('partner-airlines', function () {
        return this.browser
            .url('/en/partners/en/airlines/en/airport/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .click('#bx_651765591_1184')
            .assertView('plain', '.bx-core')
    });

    it('partner-electro-territory', function () {
        return this.browser
            .url('/en/partners/en/electro/en/territory/en/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
            .click('body > div.wrapper > div.page-content > div > div > div:nth-child(3)')
            .assertView('open_accord', '.bx-core')
    });

    it('search', function () {
        return this.browser
            .url('/en/search')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });

});    

