module.exports.waitForTitleToContainText = function(text, done) {
    browser.wait(function () {
        return browser.getTitle().then(function (title) {
            return title.indexOf(text) !== -1;
        });
    }).then(function () {
        done();
    });
};