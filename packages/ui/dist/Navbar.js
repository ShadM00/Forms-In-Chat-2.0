import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from './Button';
var navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" }
];
export function Navbar() {
    return (_jsx("nav", { className: "fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex justify-between h-16 items-center", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("span", { className: "text-xl font-bold", children: "FormsInChat" }) }), _jsx("div", { className: "hidden md:flex items-center space-x-8", children: navLinks.map(function (link) { return (_jsx(Button, { variant: "link", href: link.href, children: link.label }, link.href)); }) })] }) }) }));
}
