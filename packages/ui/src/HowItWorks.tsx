import React from 'react';

export function HowItWorks() {
  const steps = [
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

  return (
    <div id="how-it-works" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">How it works</h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  {index + 1}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{step.title}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}