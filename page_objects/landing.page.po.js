'use strict';

class LandingPage {

    get registerButton() {
        return $('[id="register"]')
    }

    clickOnRegisterButton() {
        this.registerButton.click();
    }
}

module.exports = LandingPage;