const assert = require('chai').assert;

//hermione.skip.in('ie11', "not for ie11");
/* describe('fullscreen', function () {
    beforeEach(function () {
        if ('.i-close.i-close--w.js-cookies-message__close') {
            click('.i-close.i-close--w.js-cookies-message__close')
        }
    })
}); */
describe('fullscreen pages(not ie)', function () {
    it('main', function () {
        return this.browser
            .url('/')
           /*  .then((actions) => {
                
                if ('.i-close.i-close--w.js-cookies-message__close') {
                   click('.i-close.i-close--w.js-cookies-message__close')
               }
                
            }) */
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