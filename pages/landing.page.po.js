'use strict';

var commonHelper = require('../helpers/common.helper.js');

class LandingPage extends commonHelper {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    get headerBlock() {
        return $('.menu');
    }

    get bodyBlock() {
        return $('.navbar.navbar-default');
    }

    get bodyBlock() {
        return $('.navbar.navbar-default');
    }

    get btnRegister() {
        return $('[id="register"]');
    }

    get btnRegisterUser() {
        return $('[onclick*="return register"]');
    }

    get txtUserName() {
        return $('#register-username-modal');
    }

    get txtFirstName() {
        return $('#register-first-modal');
    }

    get txtLastName() {
        return $('#register-last-modal');
    }

    get txtEmail() {
        return $('#register-email-modal');
    }

    get txtPassword() {
        return $('#register-password-modal');
    }

    get btnCatalogue() {
        return $('.dropdown-toggle');
    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    clickOnRegisterButton() {
        this.btnRegister.click();
    }

    registerUser() {
        this.btnRegisterUser.click();
    }
}

module.exports = LandingPage;