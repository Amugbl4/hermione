const assert = require('chai').assert;
it('some test', function () {
    before(function(actions) {
        actions.wait(500000);
    });
    return this.browser
        .url('/')
        .assertView('plain', '.logo-site__img');
});