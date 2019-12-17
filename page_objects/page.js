'use strict';

const bottlejs = require('bottlejs').pop('test');

bottlejs.factory('PageObject', function () {
    return {
        getLandingPage: function () {
            const landingPage = require('./landing.page.po.js');
            return new landingPage()
        }
    }
});

module.exports = bottlejs;