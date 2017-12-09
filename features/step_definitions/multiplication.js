const {defineSupportCode} = require('cucumber');
const {assert} = require('chai');

defineSupportCode(function ({Given, When, Then}) {
    let answer = 0;
    Given('Multiplate {int}', function (input) {
        answer = input;
    });
    When('With {int}', function (input) {
        answer = answer * input;
    });
    Then('Result of multiplication is {int}', function (input) {
        assert.equal(answer, input);
    });
});