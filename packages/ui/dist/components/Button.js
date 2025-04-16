var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
var base = "inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
var variants = {
    gradient: "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md hover:from-purple-700 hover:to-blue-700 focus-visible:ring-white",
    outline: "border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 focus-visible:ring-blue-600",
    white: "bg-white text-blue-600 border border-white hover:bg-blue-50 focus-visible:ring-blue-600",
};
export var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "gradient" : _b, children = _a.children, _c = _a.className, className = _c === void 0 ? "" : _c, props = __rest(_a, ["variant", "children", "className"]);
    return (_jsx("button", __assign({ type: props.type || "button", className: "".concat(base, " ").concat(variants[variant], " ").concat(className) }, props, { children: children })));
};
export default Button;
