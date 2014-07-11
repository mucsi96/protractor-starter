var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect,
    prot= protractor.getInstance();

chai.use(chaiAsPromised);

function waitForTitleToContainText(text, done) {
    browser.wait(function () {
        return browser.getTitle().then(function (title) {
            return title.indexOf(text) !== -1;
        });
    }).then(function () {
        done();
    });
}

module.exports = function() {

    this.Given(/^that I have gone to the Google page$/, function (done) {
        prot.get('/');
        done();
    });

    this.When(/^I add "([^"]*)" to the search box$/, function (text, done) {
        element(By.css('[name="q"]')).sendKeys(text);
        done();
    });

    this.When(/^click the Search Button$/, function (done) {
        element(By.css('[name="btnG"]')).click();
        done();
    });

    this.Then(/^"([^"]*)" should be mentioned in the results$/, function (text, done) {
        waitForTitleToContainText(text, done);
    });
};

