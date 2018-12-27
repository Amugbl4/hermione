const assert = require('chai').assert;

describe('fullscreen pages(not ie)', function () {
    it('main', function () {
        return this.browser
            .url('/')
            .click('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core', { ignoreElements: ['body > div.wrapper > section.bg-blue.d-none.d-sm-block.pb-sm-2 > div > div'] })
    });

    it('parking', function () {
        return this.browser
            .url('/parking')
            .clickIfAvailable('.i-close.i-close--w.js-cookies-message__close')
            .assertView('plain', '.bx-core')
    });
});