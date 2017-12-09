const {defineSupportCode} = require('cucumber');
const {assert} = require('chai');

defineSupportCode(function ({Given, When, Then}) {
    let answer = 0;
    Given('Divide {int}', function (input) {
        answer = input;
    });
    When('By {int}', function (input) {
        answer = answer / input;
    });
    Then(/^Result of division is (\w*)$/, function (input) {
        let flag = false;
        if (answer === Infinity || answer === -Infinity) {
            flag = true;
        }
        assert.equal(flag, true);
    });
    Then('Result of division is {float}', function (input) {
        assert.equal(answer, input);
    });
});