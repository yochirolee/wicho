'use client'
import React from 'react'
import { ClipboardCheck, CalendarClock, Truck } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

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
]

const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const, // 👈 esto soluciona el error de tipo
      stiffness: 80,
      damping: 18,
    },
  },
}

// Contenedor con animación escalonada
const containerVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.25 // cada card aparece con 0.25s de diferencia
    }
  }
}

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">How It Works</h2>

        {/* Contenedor animado */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 text-gray-800"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="
                bg-green-50 p-6 rounded-xl 
                shadow-md shadow-gray-300 ring-1 ring-gray-200
                hover:shadow-lg hover:shadow-green-300
                text-left transition duration-300
              "
            >
              {step.icon}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}