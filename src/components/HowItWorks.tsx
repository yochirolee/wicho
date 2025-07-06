'use client'
import React from 'react'
import { ClipboardCheck, CalendarClock, Truck } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

type Step = {
  title: string
  description: string
}

type HowItWorksDict = {
  title: string
  title2: string
  steps: Step[]
}

type Dict = {
  howItWorks: HowItWorksDict
}

type Props = {
  dict: Dict
}

const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 18,
    },
  },
}

const containerVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.25,
    },
  },
}

export default function HowItWorks({ dict }: Props) {
  const steps = dict.howItWorks.steps

  const icons = [
    <ClipboardCheck key="clipboard" className="w-10 h-10 text-green-600 mb-4" />,
    <CalendarClock key="calendar" className="w-10 h-10 text-green-600 mb-4" />,
    <Truck key="truck" className="w-10 h-10 text-green-600 mb-4" />,
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">
          {dict.howItWorks.title} <span className="text-green-600">{dict.howItWorks.title2}</span>
        </h2>

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
              className="bg-green-50 p-6 rounded-xl shadow-md shadow-gray-300 ring-1 ring-gray-200 hover:shadow-lg hover:shadow-green-300 text-left transition duration-300"
            >
              {icons[idx]}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
