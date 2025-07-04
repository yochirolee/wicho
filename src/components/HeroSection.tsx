'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Our Work', href: '#gallery' },
  { name: 'Our Services', href: '#services' },  
  { name: 'About Us', href: '#about' },
  { name: 'Preguntas Frecuentes', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img src="/logo.png" alt="Wicho Landscaping" className="h-10 w-auto" />
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
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold text-white">
                {item.name}
              </a>
            ))}
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
                  Request a Free Quote
                </a>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="relative isolate overflow-hidden bg-gradient-to-b from-green-800 to-green-600 text-white pt-28 pb-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Transform Your Outdoor Space with Wicho Landscaping
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
          Expert garden design, maintenance, and irrigation services that bring your dream yard to life.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="tel:7864519573"
              className="rounded-md bg-green-100 px-4 py-2.5 text-sm font-semibold text-green-700 shadow-sm hover:bg-green-100"
            >
              Request a Free Quote
            </a>
            <a href="#gallery" className="text-sm font-semibold text-white hover:underline">
              View Our Work <span aria-hidden="true">→</span>
            </a>
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