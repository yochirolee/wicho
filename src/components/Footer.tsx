import Link from "next/link";
import React from "react";
import Image from "next/image";

const siteDetails = {
  siteName: "Wicho Landscaping",
  logoSrc: "/logo.png",
};

const footerDetails = {
  Address: "123 Garden St, Miami, FL",
  Horario: "Monday - Saturday: 8am - 6pm",
  email: "leidivioleta@gmail.com",
  telephone: "+1 (305) 851-3004",
  socials: {
    Twitter: "https://twitter.com/wicholandscap",
    Facebook: "https://facebook.com/wicholandscaping",
    LinkedIn: "https://linkedin.com/company/wicholandscaping",
  },
};

const getPlatformIconByName = (name: string) => {
  const icons: Record<string, React.ReactNode> = {
    Twitter: (
      <svg
        className="w-6 h-6 fill-current text-white hover:text-green-400"
        viewBox="0 0 24 24"
      >
        <path d="M8 19c7.732 0 11.963-6.406 11.963-11.963 0-.182 0-.364-.012-.544A8.56 8.56 0 0 0 22 4.863a8.19 8.19 0 0 1-2.357.646 4.123 4.123 0 0 0 1.804-2.27 8.206 8.206 0 0 1-2.605.996 4.107 4.107 0 0 0-6.994 3.743A11.654 11.654 0 0 1 3.16 3.87 4.07 4.07 0 0 0 4.1 9.72a4.077 4.077 0 0 1-1.859-.514v.05a4.11 4.11 0 0 0 3.292 4.027 4.1 4.1 0 0 1-1.852.07 4.11 4.11 0 0 0 3.835 2.85A8.233 8.233 0 0 1 2 17.53a11.616 11.616 0 0 0 6.29 1.842" />
      </svg>
    ),
    Facebook: (
      <svg
        className="w-6 h-6 fill-current text-white hover:text-green-400"
        viewBox="0 0 24 24"
      >
        <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987H7.898v-2.89h2.54v-2.2c0-2.507 1.492-3.89 3.778-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.243 0-1.63.77-1.63 1.562v1.872h2.773l-.443 2.89h-2.33v6.987C18.343 21.126 22 17 22 12" />
      </svg>
    ),
    LinkedIn: (
      <svg
        className="w-6 h-6 fill-current text-white hover:text-green-400"
        viewBox="0 0 24 24"
      >
        <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-12h4v2a4 4 0 0 1 4-2zM2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
      </svg>
    ),
  };
  return icons[name] || null;
};

const Footer: React.FC<{ dict: any }> = ({ dict }) => {
  const f = dict?.footer;
  const nav = dict?.nav || {};

  // Mapea claves nav a URLs (ajusta si necesitas otras rutas)
  const navUrls: Record<string, string> = {
    work: "#work",
    services: "#services",
    about: "#about",
    faq: "#faq",
    contact: "#contact",
  };

  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo y subtítulo */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={siteDetails.logoSrc}
              alt={`${siteDetails.siteName} Logo`}
              width={50}
              height={50}
              className="object-contain"
            />
            <h3 className="text-xl font-semibold cursor-pointer">{siteDetails.siteName}</h3>
          </Link>
          <p className="mt-4 font-light text-lg">{f.subheading}</p>
        </div>

        {/* Quick Links desde dict.nav */}
        <div>
          <h4 className="text-lg font-semibold mb-4">{f.quickLinksTitle}</h4>
          <ul className="font-light text-sm space-y-2">
            {Object.keys(nav).map((key) => (
              <li key={key}>
                <Link href={navUrls[key] || "#"} className="hover:text-green-400 transition">
                  {nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto y redes */}
        <div id="contact">
          <h4 className="text-lg font-semibold mb-4">{f.contactTitle}</h4>
          <div className="flex flex-col gap-2">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                footerDetails.Address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light hover:text-green-400 transition"
            >
              {f.addressLabel}: {footerDetails.Address}
            </a>
            <span className="text-sm font-light">
              {f.hoursLabel}: {footerDetails.Horario}
            </span>
            <a
              href={`mailto:${footerDetails.email}`}
              className="text-sm font-light hover:text-green-400 transition"
            >
              {f.emailLabel}: {footerDetails.email}
            </a>
            <a
              href={`tel:${footerDetails.telephone}`}
              className="text-sm font-light hover:text-green-400 transition"
            >
              {f.phoneLabel}: {footerDetails.telephone}
            </a>
          </div>

          <div className="mt-6 flex items-center gap-5">
            {Object.keys(footerDetails.socials).map((platformName) => {
              const url =
                footerDetails.socials[platformName as keyof typeof footerDetails.socials];
              return (
                <Link
                  key={platformName}
                  href={url}
                  aria-label={platformName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-400 transition"
                >
                  {getPlatformIconByName(platformName)}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-white text-xs px-6">
        &copy; {new Date().getFullYear()} {siteDetails.siteName}. {f.copyright}
      </div>
    </footer>
  );
};

export default Footer;