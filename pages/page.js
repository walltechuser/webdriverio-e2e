'use strict';

const bottlejs = require('bottlejs').pop('test');

bottlejs.factory('PageObject', function () {
    return {
        getLandingPage: function () {
            const landingPage = require('./landing.page.po.js');
            return new landingPage()
        },
        getCataloguePage: function () {
            const cataloguePage = require('./catalogue.page.po.js');
            return new cataloguePage()
        },
        getCommonHelper: function () {
            const commonHelper = require('../helpers/common.helper.js');
            return new commonHelper()
        }
    }
});

module.exports = bottlejs;