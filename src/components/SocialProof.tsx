'use client'

import {
  Leaf,
  TreePalm,
  Droplet,
  Sun,
  Ruler,
  Scissors,
  Sprout
} from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

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

export default function OurServices() {
  const services = [
    {
      title: 'Garden Design',
      description: 'Beautiful custom garden layouts designed to suit your space.',
      icon: <TreePalm className="h-6 w-6" />,
    },
    {
      title: 'Mulch Installation',
      description: 'Protect your soil and improve curb appeal with quality mulch.',
      icon: <Leaf className="h-6 w-6" />,
    },
    {
      title: 'Garden Maintenance',
      description: 'Keep your garden vibrant and well-trimmed year-round.',
      icon: <Sprout className="h-6 w-6" />,
    },
    {
      title: 'Garden Lighting Design',
      description: 'Add elegance and security with professional lighting.',
      icon: <Sun className="h-6 w-6" />,
    },
    {
      title: 'Grass Lining Design',
      description: 'Crisp, clean lawn borders that elevate your yard.',
      icon: <Ruler className="h-6 w-6" />,
    },
    {
      title: 'Grass Cutting & Planning',
      description: 'Smart mowing and layout strategies for perfect lawns.',
      icon: <Scissors className="h-6 w-6" />,
    },
    {
      title: 'Irrigation System',
      description: 'Automated watering systems to keep your plants thriving.',
      icon: <Droplet className="h-6 w-6" />,
    },
  ]

  return (
    <section id="services" className="bg-white">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Explore our <br /> awesome <span className="text-green-600">Services</span>
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
                {service.icon}
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
