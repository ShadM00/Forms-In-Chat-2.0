import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var features = [
    "Conversational UI",
    "Prompt-to-form in seconds",
    "Share via link or QR",
    "Export to CSV/JSON",
    "Analytics-ready",
    "Mobile-first design",
];
export default function Features() {
    return (_jsxs("section", { id: "features", className: "py-16 px-6 text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-10", children: "What Makes It Magical" }), _jsx("div", { className: "grid md:grid-cols-3 gap-6 max-w-6xl mx-auto", children: features.map(function (text, i) { return (_jsx("div", { className: "p-6 rounded border shadow-sm bg-white", children: text }, i)); }) })] }));
}
