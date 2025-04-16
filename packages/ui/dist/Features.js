import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Features() {
    var features = [
        {
            title: 'AI-Powered Form Creation',
            description: 'Create forms naturally through conversation with our AI assistant.'
        },
        {
            title: 'Smart Templates',
            description: 'Choose from intelligent templates that adapt to your needs.'
        },
        {
            title: 'Real-time Collaboration',
            description: 'Work together with your team in real-time on form creation.'
        }
    ];
    return (_jsx("div", { id: "features", className: "py-12 bg-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("div", { className: "lg:text-center", children: _jsx("h2", { className: "text-3xl font-extrabold text-gray-900 sm:text-4xl", children: "Features that make form creation effortless" }) }), _jsx("div", { className: "mt-10", children: _jsx("div", { className: "grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3", children: features.map(function (feature, index) { return (_jsx("div", { className: "pt-6", children: _jsx("div", { className: "flow-root bg-gray-50 rounded-lg px-6 pb-8", children: _jsxs("div", { className: "-mt-6", children: [_jsx("h3", { className: "mt-8 text-lg font-medium text-gray-900 tracking-tight", children: feature.title }), _jsx("p", { className: "mt-5 text-base text-gray-500", children: feature.description })] }) }) }, index)); }) }) })] }) }));
}
