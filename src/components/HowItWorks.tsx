import React from 'react';
import { ClipboardCheck, CalendarClock, Truck } from "lucide-react";

const steps = [
  {
    icon: <ClipboardCheck className="w-10 h-10 text-green-600 mb-4" />,
    title: "1. Request a Free Estimate",
    desc: "Tell us about your landscaping needs and we'll give you a no-obligation quote.",
  },
  {
    icon: <CalendarClock className="w-10 h-10 text-green-600 mb-4" />,
    title: "2. Schedule Your Service",
    desc: "We agree on a convenient time to complete your garden or lawn project.",
  },
  {
    icon: <Truck className="w-10 h-10 text-green-600 mb-4" />,
    title: "3. Enjoy a Beautiful Yard",
    desc: "We show up on time and deliver high-quality landscaping work — satisfaction guaranteed.",
  },
];

const HowItWorks = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 text-gray-800">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-green-50 p-6 rounded-xl shadow-md shadow-grey-300 ring-grey-200 hover:shadow-lg transition text-left"
          >
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-grey-500">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks; 