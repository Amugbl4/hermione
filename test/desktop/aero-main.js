const assert = require('chai').assert;

hermione.skip.in('ie11', "not for ie11");
describe('fullscreen', function () {
    beforeEach(function () {
        if ('.i-close.i-close--w.js-cookies-message__close') {
            click('.i-close.i-close--w.js-cookies-message__close')
        }
    })
});
describe('fullscreen pages(not ie)', function () {
    document.querySelector('.cookies-message')

    it('main(not ie)', function () {
        return this.browser
            .url('/')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core', { ignoreElements: ['body > div.wrapper > section.bg-blue.d-none.d-sm-block.pb-sm-2 > div > div'] })
    });
 
    it('parking(not ie)', function () {
        return this.browser
            .url('/parking')
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
            .assertView('plain', '.bx-core')
    })

    it('registration', function () {
        return this.browser
            .url('/registration')
            .assertView('plain', '.bx-core')
    });

    it('news-detail', function () {
        return this.browser
            .url('/about/news/novye-pravila-polzovaniya-parkovochnym-kompleksom-c-17-dekab/')
            .assertView('plain', '.bx-core')
    });
    
    it('history', function () {
        return this.browser
            .url('/about/history/')
            .assertView('plain', '.bx-core')
    });

    it('businesshall', function () {
        return this.browser
            .url('/services/businesshall/')
            .assertView('plain', '.bx-core')
    });
    
    it('vip', function () {
        return this.browser
            .url('/services/vip/')
            .assertView('plain', '.bx-core')
    });

    it('vip-booking', function () {
        return this.browser
            .url('/services/vip/booking/')
            .assertView('plain', '.bx-core')
    });

    it('scheme', function () {
        return this.browser
            .url('/scheme/')
            .assertView('plain', '.bx-core')
    });

    it('luggage', function () {
        return this.browser
            .url('/services/luggage/')
            .click('#heading0 > button')
            .assertView('plain', '.bx-core')
    });

    it('rules', function () {
        return this.browser
            .url('/rules/predpoletnyy-kontrol/')
            .assertView('plain', '.bx-core')
    });

    it('managment', function () {
        return this.browser
            .url('/contacts/management/')
            .assertView('plain', '.bx-core')
    });

    it('companies', function () {
        return this.browser
            .url('/contacts/companies/')
            .assertView('plain', '.bx-core')
    });

    it('feedback', function () {
        return this.browser
            .url('/feedback/')
            .assertView('plain', '.bx-core')
    });

    it('menu', function () {
        return this.browser
            .url('/')
            .click('body > div.wrapper > header > div > div > div > div.header-col.ml-auto.fx-ai-center--xs > span.hdr-link.hdr-link--nav.js-nav-btn')
            .assertView('plain', '.nav')
    });

    it('menu-partners', function () {
        return this.browser
            .url('/')
            .click('body > div.wrapper > header > div > div > div > div.header-col.ml-auto.fx-ai-center--xs > span.hdr-link.hdr-link--nav.js-nav-btn')
            .click('body > div.wrapper > header > div > div > div > div.header-col.header-col--first.header-col--opened.js-tab > span.hdr-link.hdr-link-tab.js-tab__btn.hdr-link--b')
            .assertView('plain', '.nav')
    });

    it('partner-airlines', function () {
        return this.browser
            .url('/partners/airlines/airport/')
            .click('#bx_651765591_1184')
            .assertView('plain', '.bx-core')
    });

    it('partner-electro-territory', function () {
        return this.browser
            .url('/partners/electro/territory/')
            .click('#heading0 > button')
            .assertView('plain', '.bx-core')
    });

    it('search', function () {
        return this.browser
            .url('/search')
            .assertView('plain', '.bx-core')
    });

});    

