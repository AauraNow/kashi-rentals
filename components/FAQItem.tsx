'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-dark-200/80 overflow-hidden transition-all duration-200 hover:border-dark-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="text-base sm:text-lg font-semibold text-dark-950 pr-2">
          {question}
        </h3>
        <div className={`w-8 h-8 rounded-full bg-dark-50 border border-dark-200/60 flex items-center justify-center text-dark-700 flex-shrink-0 transition-transform duration-300 ${
          isOpen ? 'rotate-180 bg-primary-50 text-primary-600 border-primary-200' : ''
        }`}>
          <svg
            className="w-4 h-4 fill-none stroke-current"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 sm:px-6 pb-6 pt-1 text-dark-600 text-sm sm:text-base leading-relaxed border-t border-dark-100/60">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
