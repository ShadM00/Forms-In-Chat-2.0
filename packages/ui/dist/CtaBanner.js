import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from './Button';
export function CtaBanner() {
    return (_jsx("div", { className: "bg-blue-600", children: _jsx("div", { className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "lg:text-center", children: [_jsx("h2", { className: "text-3xl font-extrabold text-white sm:text-4xl", children: "Ready to transform your form creation?" }), _jsx("p", { className: "mt-4 text-lg leading-6 text-blue-100", children: "Start creating intelligent forms with AI assistance today." }), _jsx("div", { className: "mt-8 flex justify-center", children: _jsx(Button, { variant: "primary", className: "bg-white text-blue-600 hover:bg-blue-50", children: "Get Started Free" }) })] }) }) }));
}
