import React from 'react'

const images = [
  '/residential-lawn-care-services.webp',
  '/professional-garden-maintenance.webp',
  '/mulch-installation-service.webp',
  '/garden-lighting-design-sarasota.webp',
  '/lawn-edging-installation.webp',
  '/grass-cutting-and-planning.webp',
  '/automated-irrigation-system-installation.webp',
  '/backyard-landscaping-ideas.webp',
  '/sustainable-landscaping-solutions.webp',
]

type OfferSectionDict = {
  headline: string
  headline2: string
}

type Dict = {
  offerSection: OfferSectionDict
}

const Gallery = ({ dict }: { dict: Dict }) => (
  <section id="gallery" className="bg-white py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        {dict.offerSection.headline} <span className="text-green-600">{dict.offerSection.headline2}</span>
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={src}
              alt={`Landscaping image ${idx + 1}`}
              className="w-full h-64 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110 hover:animate-none"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Gallery
