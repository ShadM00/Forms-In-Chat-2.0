import React from 'react';
import { Button } from './Button';

export function CtaBanner() {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to transform your form creation?
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Start creating intelligent forms with AI assistance today.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="primary" className="bg-white text-blue-600 hover:bg-blue-50">
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}