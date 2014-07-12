var helpers = require('../spec_helpers'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect,
    prot= protractor.getInstance();

chai.use(chaiAsPromised);



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
        helpers.waitForTitleToContainText(text, done);
    });
};

