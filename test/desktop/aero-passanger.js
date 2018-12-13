const assert = require('chai').assert;

describe('aero.svx', function() {
    it('should find RU', function() {
        return this.browser
            .url('en/')
            .getText('a.hdr-link.ml-sm-3')
            .then(function(text) {
                assert.equal(text, 'RU')
            });
    });
});