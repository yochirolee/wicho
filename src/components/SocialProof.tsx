'use client'

import {
  Leaf,
  TreePalm,
  Droplet,
  Sun,
  Ruler,
  Scissors,
  Sprout,
} from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

// Tipos
type Service = {
  title: string
  description: string
}

type Dict = {
  socialProof: {
    title: string
    title2: string
    services: Service[]
  }
}

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 18,
    },
  },
}

export default function OurServices({ dict }: { dict: Dict }) {
  const services = dict.socialProof.services

  const icons = [
    <TreePalm key="treepalm" className="h-6 w-6" />,
    <Leaf key="leaf" className="h-6 w-6" />,
    <Sprout key="sprout" className="h-6 w-6" />,
    <Sun key="sun" className="h-6 w-6" />,
    <Ruler key="ruler" className="h-6 w-6" />,
    <Scissors key="scissors" className="h-6 w-6" />,
    <Droplet key="droplet" className="h-6 w-6" />,
  ]

  return (
    <section id="services" className="bg-white">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          {dict.socialProof.title}{' '}
          <span className="text-green-600">{dict.socialProof.title2}</span>
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center rounded-xl bg-green-50 p-6 text-center shadow-md hover:shadow-lg transition"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <span className="inline-block rounded-full bg-green-100 p-3 text-green-600">
                {icons[index]}
              </span>
              <h2 className="mt-3 text-xl font-semibold text-gray-700">{service.title}</h2>
              <p className="mt-2 text-gray-500">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
