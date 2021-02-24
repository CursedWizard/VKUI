"use strict";
exports.__esModule = true;
exports.IS_PLATFORM_ANDROID = exports.IS_PLATFORM_IOS = exports.platform = exports.VKCOM = exports.IOS = exports.ANDROID = exports.Platform = void 0;
var browser_1 = require("./browser");
var Platform;
(function (Platform) {
    Platform["ANDROID"] = "android";
    Platform["IOS"] = "ios";
    Platform["VKCOM"] = "vkcom";
})(Platform = exports.Platform || (exports.Platform = {}));
exports.ANDROID = Platform.ANDROID;
exports.IOS = Platform.IOS;
exports.VKCOM = Platform.VKCOM;
function platform(browserInfo) {
    if (!browserInfo) {
        browserInfo = browser_1.computeBrowserInfo();
    }
    return browserInfo.system === 'ios' ? exports.IOS : exports.ANDROID;
}
exports.platform = platform;
var platformName = platform();
/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */
exports.IS_PLATFORM_IOS = platformName === exports.IOS;
/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */
exports.IS_PLATFORM_ANDROID = platformName === exports.ANDROID;
