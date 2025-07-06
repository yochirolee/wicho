import React from 'react';

const images = [
  '/landscaping1.webp',
  '/landscaping2.jpg',
  '/logo4.jpeg',
  '/landscaping4.jpg',
  '/landscaping5.webp',
  '/logo3.jpeg',
  '/logo5.jpeg',
  '/logo6.jpeg',
  '/logo7.jpeg',
];

const Gallery = ({ dict }: { dict: any }) => (
  <section id="gallery" className="bg-white py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
      {dict.offerSection.headline} <span className="text-green-600"> {dict.offerSection.headline2}</span>
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
              className="w-full h-64 object-cover
                         transform
                         transition-transform duration-500 ease-in-out
                         hover:scale-110
                         hover:animate-none"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
