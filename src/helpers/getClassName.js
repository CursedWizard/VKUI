"use strict";
exports.__esModule = true;
exports.getClassName = void 0;
var platform_1 = require("../lib/platform");
function getClassName(base, osname) {
    if (osname === void 0) { osname = platform_1.platform(); }
    return base + " " + base + "--" + osname;
}
exports.getClassName = getClassName;
