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
export function Button(_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'default' : _b, href = _a.href, _c = _a.className, className = _c === void 0 ? '' : _c, props = __rest(_a, ["children", "variant", "href", "className"]);
    var baseStyles = "px-4 py-2 rounded";
    var variantStyles = {
        default: "bg-gray-100 hover:bg-gray-200",
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        link: "bg-transparent hover:underline p-0"
    };
    if (href) {
        return (_jsx("a", { href: href, className: "".concat(baseStyles, " ").concat(variantStyles[variant], " ").concat(className), children: children }));
    }
    return (_jsx("button", __assign({ className: "".concat(baseStyles, " ").concat(variantStyles[variant], " ").concat(className) }, props, { children: children })));
}
