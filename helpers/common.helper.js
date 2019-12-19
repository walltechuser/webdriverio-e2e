'use strict';

class CommonHelper {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    get btnCart() {
        return $('.navbar-btn .hidden-sm');
    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    enterValueIntoField(locator, value) {
        locator.addValue(value);
    }

    sleep(value) {
        browser.pause(value * 1000);
    }

    clickOnButton(locator) {
        locator.click();
    }

    tickCheckbox(value) {
        var el = $("[type='checkbox'][value='" + value + "']");
        el.click();
    }

    goToCart() {
        this.sleep(0.5);
        this.btnCart.click();
    }
}

module.exports = CommonHelper;