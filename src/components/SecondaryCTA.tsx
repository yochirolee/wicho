'use client'

import { motion } from 'framer-motion'

type SecondaryCTADict = {
  title1: string
  title2: string
  description: string
  button: string
}

type Dict = {
  secondaryCTA: SecondaryCTADict
}

type Props = {
  dict: Dict
}

export default function SecondaryCTA({ dict }: Props) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-green-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

          {/* SVG decorativo */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#natureGradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="natureGradient">
                <stop stopColor="#4caf50" />
                <stop offset={1} stopColor="#2e7d32" />
              </radialGradient>
            </defs>
          </svg>

          {/* Texto animado */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-green-100 sm:text-4xl">
              {dict.secondaryCTA.title1}{' '}
              <span className="text-green-600">{dict.secondaryCTA.title2}</span>
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-200">
              {dict.secondaryCTA.description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="tel:9418794806"
                className="rounded-md bg-green-100 px-3.5 py-2.5 text-sm font-semibold text-green-900 shadow-xs hover:bg-green-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
              >
                {dict.secondaryCTA.button}
              </a>
            </div>
          </motion.div>

          {/* Imagen animada */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative mt-12 w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem]"
          >
            <img
              alt="Landscaping sample"
              src="/seasonal-garden-maintenance.webp"
              width={1824}
              height={1080}
              className="absolute inset-0 w-full h-full object-cover rounded-md shadow-lg ring-1 ring-green-900/30"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
