'use client'

import { Leaf, Sparkles, Phone } from 'lucide-react'

const features = [
  {
    name: 'Professional Landscaping',
    description: 'From design to maintenance, we handle it all with care and expertise.',
    icon: Leaf,
  },
  {
    name: 'Clean & Precise Work',
    description: 'We leave your yard spotless and your lawn perfectly trimmed.',
    icon: Sparkles,
  },
  {
    name: 'Personalized Service',
    description: 'Direct attention and free estimates tailored to your needs.',
    icon: Phone,
  },
]

export default function WhyChooseUsSection() {
  return (
    <div className="overflow-hidden bg-green-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-lime-300">Why Choose Us?</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Excellence in Every Yard
              </p>
              <p className="mt-6 text-lg text-green-100">
                With Wicho Landscaping, you're choosing a team committed to quality, care, and personal service.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-green-200 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-10">
                    <feature.icon className="absolute top-1 left-1 h-6 w-6 text-lime-300" aria-hidden="true" />
                    <dt className="inline font-semibold text-white">{feature.name}</dt>{' '}
                    <dd className="inline">— {feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="/Garden-Landscaping.jpg"
            alt="Landscaping"
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}