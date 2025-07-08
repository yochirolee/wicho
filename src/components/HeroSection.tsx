'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LanguageSwitcher from './LanguageSwitcher'

// Tipos explícitos para dict
type NavDict = {
  work: string
  services: string
  about: string
  faq: string
  contact: string
}

type HeroDict = {
  headline: string
  subtext: string
  quote: string
  view: string
}

type Dict = {
  nav: NavDict
  hero: HeroDict
}

export default function HeroSection({ dict }: { dict: Dict }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const textControls = useAnimation()
  const linksControls = useAnimation()

  const navigation = [
    { name: dict.nav.work, href: '#gallery' },
    { name: dict.nav.services, href: '#services' },
    { name: dict.nav.about, href: '#about' },
    { name: dict.nav.faq, href: '#faq' },
    { name: dict.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    textControls.start({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } })
    linksControls.start({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 1.1 } })
  }, [textControls, linksControls])

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <motion.img
                src="/LogoWicho2.png"
                alt="Wicho Landscaping"
                className="h-12 w-auto"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-white hover:text-green-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 + i * 0.1 } }}
              >
                {item.name}
              </motion.a>
            ))}
            <LanguageSwitcher />
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-white p-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img src="/LogoWicho2.png" alt="Wicho Landscaping" className="h-10 w-auto" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-green-900"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-green-900 hover:bg-green-50"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="tel:9418794806"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-green-900 hover:bg-green-50"
                >
                  {dict.hero.quote}
                </a>
                <LanguageSwitcher />
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="bg-green-600 text-white pt-20 pb-16 sm:pt-28 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            {/* Texto */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={textControls}
              >
                {dict.hero.headline}
              </motion.h1>
              <motion.p
                className="mt-4 text-lg leading-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={textControls}
              >
                {dict.hero.subtext}
              </motion.p>
              <div className="mt-6 flex items-center justify-center lg:justify-start gap-x-6">
                <motion.a
                  href="tel:9418794806"
                  className="rounded-md bg-green-100 px-4 py-2.5 text-sm font-semibold text-green-700 shadow-sm hover:bg-green-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={linksControls}
                >
                  {dict.hero.quote}
                </motion.a>
                <motion.a
                  href="#gallery"
                  className="text-sm font-semibold text-white hover:underline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={linksControls}
                >
                  {dict.hero.view} <span aria-hidden="true">→</span>
                </motion.a>
              </div>
            </div>

            {/* Imagen */}
            <div className="lg:w-1/2">
              <motion.img
                src="/Garden-Landscaping1.jpeg"
                alt="Landscaping"
                className="w-full h-auto max-h-64 sm:max-h-full rounded-xl shadow-lg object-cover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
