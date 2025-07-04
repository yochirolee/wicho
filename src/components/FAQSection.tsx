'use client'
import React, { useState } from 'react'

const faqs = [
  {
    q: 'What landscaping services do you offer?',
    a: 'We provide garden design, mulch installation, garden maintenance, lighting design, grass lining, grass cutting & planning, and irrigation systems.',
  },
  {
    q: 'How do I request a free quote?',
    a: 'You can request a free quote by filling out our contact form or calling us at (305) 851-3004 or (754) 313-3140.',
  },
  {
    q: 'Do you service my area?',
    a: 'We proudly serve South Florida and nearby areas. Contact us to confirm availability in your location.',
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section id= "faq" className="relative isolate overflow-hidden bg-green-50 py-24 px-6 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-gray-800 mb-4">F.A.Q</p>
          <h2 className="sm:text-4xl text-3xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>
        <ul className="basis-1/2">
          {faqs.map((faq, index) => (
            <li key={index} className="group border-t border-green-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left text-gray-900 md:text-lg"
                aria-expanded={activeIndex === index}
              >
                <span className="flex-1">{faq.q}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeIndex === index ? 'rotate-45' : ''
                  }`}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="7" width="16" height="2" rx="1" fill="currentColor" />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    fill="currentColor"
                    className={`transition-opacity duration-200 ${
                      activeIndex === index ? 'opacity-0' : 'opacity-100'
                    } rotate-90`}
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="pb-5 leading-relaxed text-gray-800">
                  {faq.a}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
