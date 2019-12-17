//
// export class CommonHelper {
//
//     this.fillFromName = async function (value) {
//         await commonHelper.waitUntilElementVisible(this.txtFromName);
//         await this.txtFromName.clear();
//         await this.txtFromName.sendKeys(value);
//     };
//     this.clickSave = async function () {
//         await commonHelper.waitUntilElementVisible(this.btnSaveOption);
//         await this.btnSaveOption.click();
//     };
//     /**
//      * Wait until selected element will be visible
//      *
//      * @param element
//      * @param message
//      * @param timeout
//      */
//     this.waitUntilElementVisible = async function (element, message, timeout) {
//         var mess = message ? message : element.locator().toString() + ' is not visible.';
//         var to = timeout ? timeout : config.config.allScriptsTimeout;
//         var EC = protractor.ExpectedConditions;
//         await browser.driver.wait(EC.visibilityOf(element), to, mess);
//     };
//
// };

export default class CommonHelper {
    constructor() {
        this.title = 'WeaveSocks'
    }

    open(path) {
        browser.url(path)
    }
}
