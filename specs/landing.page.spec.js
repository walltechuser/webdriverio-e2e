'use strict';
const pageObject = require('../page_objects/page.js').container.PageObject;
const landingPage = pageObject.getLandingPage();
const assert = require('assert');

describe('Landing Page', () => {
    it('user should see landing page', () => {
        const title = browser.getTitle();
        assert.strictEqual(title, 'WeaveSocks');
        landingPage.clickOnRegisterButton()
    })
});
