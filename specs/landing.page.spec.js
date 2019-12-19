'use strict';

var pageObject = require('../pages/page.js').container.PageObject;
var landingPage = pageObject.getLandingPage();
var cataloguePage = pageObject.getCataloguePage();
var commonHelper = pageObject.getCommonHelper();
var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var faker = require('faker');
var fs = require('fs');
var contents = fs.readFileSync('data.conf.json');
var jsonContent = JSON.parse(contents);
var password = jsonContent.data['password'];

describe('Landing Page', function () {
    const nameFirst = faker.name.firstName();
    const nameLast = faker.name.lastName();
    const nameUser = nameFirst + ' ' + nameLast;
    const email = faker.internet.email();
    const crossed = jsonContent.products['crossed'];
    const black = jsonContent.colors['black'];
    const red = jsonContent.colors['red'];

    it('User should see landing page', () => {
        const title = browser.getTitle();
        assert.strictEqual(title, 'WeaveSocks');
    });

    it('Register a new user', function () {
        landingPage.clickOnRegisterButton();
        commonHelper.enterValueIntoField(landingPage.txtFirstName, nameUser);
        commonHelper.enterValueIntoField(landingPage.txtLastName, nameFirst);
        commonHelper.enterValueIntoField(landingPage.txtUserName, nameLast);
        commonHelper.enterValueIntoField(landingPage.txtEmail, email);
        commonHelper.enterValueIntoField(landingPage.txtPassword, password);
        landingPage.registerUser();
        commonHelper.sleep(5)
    });

    it('Add product to the "cart"', function () {
        commonHelper.clickOnButton(landingPage.btnCatalogue);
        commonHelper.tickCheckbox(red);
        commonHelper.tickCheckbox(black);
        cataloguePage.applyFilters();
        cataloguePage.addProductToCart(crossed);
        commonHelper.goToCart();
        cataloguePage.cartContainsProduct(crossed);
    });
});

faker.name.firstName() + faker.name.lastName();