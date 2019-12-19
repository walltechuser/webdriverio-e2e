'use strict';

var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var commonHelper = require('../helpers/common.helper.js');

class CataloguePage extends commonHelper {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    get btnApply() {
        return $('#filters+.btn-sm');
    }

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    applyFilters() {
        this.btnApply.click();
    }

    addProductToCart(name) {
        let el = $('//*[contains(text(),' + '"' + name + '"' + ')]/parent::*/following-sibling::*[2]/*[@class="btn btn-primary"]');
        el.click();
    }

    cartContainsProduct(name) {
        let productContainer = $('#cart-list .item').getText();
        this.sleep(2);
        expect(productContainer).contains(name)
    }
}

module.exports = CataloguePage;