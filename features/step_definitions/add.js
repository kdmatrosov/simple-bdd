const {defineSupportCode} = require('cucumber');
const {assert} = require('chai');

defineSupportCode(function ({Given, When, Then}) {
    let answer = 0;
    Given('I start with {int}', function (input) {
        answer = input;
    });
    When('I add {int}', function (input) {
        answer = answer + input;
    });
    Then('I end up with {int}', function (input) {
        assert.equal(answer, input);
    });
});