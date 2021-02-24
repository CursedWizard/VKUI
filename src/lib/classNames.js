"use strict";
exports.__esModule = true;
exports.classNames = void 0;
function classNames() {
    var classnames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classnames[_i] = arguments[_i];
    }
    var result = [];
    classnames.forEach(function (item) {
        if (!item) {
            return;
        }
        switch (typeof item) {
            case 'string':
                result.push(item);
                break;
            case 'object':
                Object.keys(item).forEach(function (key) {
                    if (item[key]) {
                        result.push(key);
                    }
                });
                break;
            default:
                result.push("" + item);
        }
    });
    return result.join(' ');
}
exports.classNames = classNames;
