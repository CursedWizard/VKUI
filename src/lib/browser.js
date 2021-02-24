"use strict";
exports.__esModule = true;
exports.computeBrowserInfo = exports.System = void 0;
var IOSDetections_1 = require("@vkontakte/vkjs/lib/IOSDetections");
var System;
(function (System) {
    System["IOS"] = "ios";
    System["UNKNOWN"] = "";
})(System = exports.System || (exports.System = {}));
var memoized = {};
function computeBrowserInfo(userAgent) {
    if (userAgent === void 0) { userAgent = ''; }
    if (memoized[userAgent]) {
        return memoized[userAgent];
    }
    var systemVersion = null;
    var system = System.UNKNOWN;
    var _a = IOSDetections_1.detectIOS(userAgent), isIOS = _a.isIOS, iosMajor = _a.iosMajor, iosMinor = _a.iosMinor;
    if (isIOS) {
        system = System.IOS;
        systemVersion = {
            major: iosMajor,
            minor: iosMinor
        };
    }
    var browserInfo = {
        userAgent: userAgent,
        system: system,
        systemVersion: systemVersion
    };
    memoized[userAgent] = browserInfo;
    return browserInfo;
}
exports.computeBrowserInfo = computeBrowserInfo;
