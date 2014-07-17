var helpers = require('protractor-helpers'),
    GoogleHomepage = require('./google-search.po'),
    googleHomepage = new GoogleHomepage();

module.exports = function() {

    this.Given(/^that I have gone to the Google page$/, function (done) {
        googleHomepage.get();
        done();
    });

    this.When(/^I add "([^"]*)" to the search box$/, function (text, done) {
        googleHomepage.searchField.sendKeys(text);
        done();
    });

    this.When(/^click the Search Button$/, function (done) {
        googleHomepage.searchButton.click();
        done();
    });

    this.Then(/^"([^"]*)" should be mentioned in the results$/, function (text, done) {
        helpers.waitForTitleToContainText(text).then(done);
    });
};

