const assert = require('chai').assert;

describe('fullscreen pages', function () {
    /* it('main', function () {
        return this.browser
            .url('/services/luggage/')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '#accordion > div:nth-child(1)')
            .click('#accordion > div:nth-child(1)')
            .scroll(0)
            .assertView('open', '.bx-core')
    }); */

    it('vip-card', function () {
        return this.browser
            .url('/')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '#bx_651765591_971 > a')
            .moveToObject('#bx_651765591_971 > a')
            .assertView('hovered', 'body > div.wrapper > section.bg-blue.pb-8 > div')
    });

   /*  it('parking', function () {
        return this.browser
            .url('/parking')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
    }); */
});