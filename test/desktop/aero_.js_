const assert = require('chai').assert;

describe('aero.svx', function() {
    it('should find Tablo', function() {
        return this.browser
            .url('/')
            .getText('.card-content__title')
            .then(function(title) {
                assert.equal(title, 'Flight status')
            });
    });
});