const {defineSupportCode} = require('cucumber');
const {assert} = require('chai');

defineSupportCode(function ({Given, When, Then}) {
    let answer = 0;
    Given('From {int}', function (input) {
        answer = input;
    });
    When('Substract {int}', function (input) {
        answer = answer - input;
    });
    Then('And result is {int}', function (input) {
        assert.equal(answer, input);
    });
});