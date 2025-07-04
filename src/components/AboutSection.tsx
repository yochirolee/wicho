'use client'

const links = [
  { name: 'Request a Free Quote', href: '#' },
  { name: 'Our Services', href: '#' },
  { name: 'Customer Testimonials', href: '#' },
  { name: 'Photo Gallery', href: '#' },
]
const stats = [
  { name: 'Happy Clients', value: '250+' },
  { name: 'Gardens Designed', value: '180+' },
  { name: 'Weekly Maintenances', value: '100+' },
  { name: 'Years of Experience', value: '10+' },
]

export default function AboutWithStats() {
  return (
    <div id="about" className="relative isolate overflow-hidden bg-green-900 py-24 sm:py-32">
     
     <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-200/30 to-transparent"></div>
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-[68.5rem] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-[68.5rem] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">About Us</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-left text-green-200 sm:text-xl/8">
            At <span className="font-semibold text-lime-300">Wicho Landscaping</span>, we bring passion, precision, and professionalism to every outdoor space.
            With years of experience in garden design, maintenance, and lawn care, we’re committed to helping you create a beautiful,
            functional, and relaxing environment right outside your door. Whether you need a simple trim or a complete garden makeover,
            we’re here to deliver results you’ll love — on time and on budget.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
         
          <dl className="mt-16 grid grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-white">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
