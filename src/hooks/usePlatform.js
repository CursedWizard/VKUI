"use strict";
exports.__esModule = true;
exports.usePlatform = void 0;
var react_1 = require("react");
var SSR_1 = require("../lib/SSR");
var ConfigProviderContext_1 = require("../components/ConfigProvider/ConfigProviderContext");
function usePlatform() {
    var ssrContext = react_1.useContext(SSR_1.SSRContext);
    var platform = react_1.useContext(ConfigProviderContext_1.ConfigProviderContext).platform;
    return ssrContext.platform || platform;
}
exports.usePlatform = usePlatform;
