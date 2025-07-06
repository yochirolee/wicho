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
              <motion.img src="/logo.png" alt="Wicho Landscaping" className="h-10 w-auto"
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
                <img src="/logo.png" alt="Wicho Landscaping" className="h-8 w-auto" />
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
                  href="tel:7864519573"
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

      <main className="relative isolate overflow-hidden bg-gradient-to-b from-green-800 to-green-600 text-white pt-28 pb-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={textControls}
          >
            {dict.hero.headline}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={textControls}
          >
            {dict.hero.subtext}
          </motion.p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.a
              href="tel:7864519573"
              className="rounded-md bg-green-100 px-4 py-2.5 text-sm font-semibold text-green-700 shadow-sm hover:bg-green-100"
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
        <img
          src="/Garden-Landscaping.jpg"
          alt="Landscaping"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
      </main>
    </div>
  )
}
