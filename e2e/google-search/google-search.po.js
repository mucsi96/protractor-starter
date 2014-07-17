var prot= protractor.getInstance();

module.exports = function () {
    this.searchField = $('[name="q"]');
    this.searchButton = $('[name="btnG"]');

    this.get = function () {
        prot.get('/');
    };
};