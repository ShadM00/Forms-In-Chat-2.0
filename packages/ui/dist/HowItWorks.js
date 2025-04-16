import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function HowItWorks() {
    var steps = [
        {
            title: 'Describe your form',
            description: 'Tell our AI what kind of form you need in plain English.'
        },
        {
            title: 'Review and customize',
            description: 'Fine-tune the generated form to match your exact requirements.'
        },
        {
            title: 'Share and collect',
            description: 'Share your form and start collecting responses instantly.'
        }
    ];
    return (_jsx("div", { id: "how-it-works", className: "bg-gray-50 py-12", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("div", { className: "lg:text-center", children: _jsx("h2", { className: "text-3xl font-extrabold text-gray-900", children: "How it works" }) }), _jsx("div", { className: "mt-10", children: _jsx("div", { className: "grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3", children: steps.map(function (step, index) { return (_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white", children: index + 1 }), _jsx("p", { className: "ml-16 text-lg leading-6 font-medium text-gray-900", children: step.title }), _jsx("p", { className: "mt-2 ml-16 text-base text-gray-500", children: step.description })] }, index)); }) }) })] }) }));
}
