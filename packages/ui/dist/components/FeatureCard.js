import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export var FeatureCard = function (_a) {
    var title = _a.title, description = _a.description;
    return (_jsxs("div", { className: "bg-white rounded-xl shadow-md p-6 flex flex-col items-start transition hover:shadow-lg focus-within:shadow-lg", children: [_jsx("h3", { className: "font-bold text-lg mb-2 text-gray-900", children: title }), description && _jsx("p", { className: "text-gray-600 text-base", children: description })] }));
};
export default FeatureCard;
