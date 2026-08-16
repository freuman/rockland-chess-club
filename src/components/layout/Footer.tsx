import Link from 'next/link'
import Image from 'next/image'

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Classes', href: '/classes' },
    { name: 'Join', href: '/join' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/RocklandChess/',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 relative paper-texture">
      {/* Classical decorative divider */}
      <div className="classical-divider mb-16"></div>
      
      {/* Decorative chess pieces */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-20 text-4xl text-burgundy-600 transform rotate-12">♔</div>
        <div className="absolute bottom-8 right-20 text-3xl text-amber-600 transform -rotate-12">♕</div>
        <div className="absolute top-1/2 left-1/4 text-2xl text-forest-600 transform rotate-45">♗</div>
        <div className="absolute top-1/3 right-1/3 text-3xl text-burgundy-600 transform -rotate-30">♘</div>
      </div>

      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-16 sm:py-20 lg:px-8 relative z-10">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 mb-12" aria-label="Footer">
          {navigation.main.map((item, index) => (
            <div key={item.name} className="relative">
              <Link 
                href={item.href} 
                className="text-lg font-medium text-burgundy-700 hover:text-burgundy-800 transition-colors duration-300 group"
                style={{fontFamily: 'var(--font-playfair)'}}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              {index < navigation.main.length - 1 && (
                <div className="hidden sm:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-amber-600 opacity-50">♦</div>
              )}
            </div>
          ))}
        </nav>

        {/* Social Media */}
        <div className="flex justify-center space-x-8 mb-12">
          {navigation.social.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="elegant-card p-3 text-burgundy-600 hover:text-burgundy-800 hover:bg-amber-100 transition-all duration-300 group"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            </Link>
          ))}
        </div>

        {/* Classical divider */}
        <div className="classical-divider mb-12"></div>

        {/* Club Information */}
        <div className="text-center">
          <div className="elegant-card inline-flex items-center space-x-3 px-8 py-4 mb-6 bg-gradient-to-r from-cream to-amber-100">
            <div>
              <Image 
                src="/favicon-32x32.png" 
                alt="Rockland County Chess Club" 
                width={28} 
                height={28}
                className="h-7 w-7 inline mr-2"
              />
              <span className="text-xl font-bold text-burgundy-800" style={{fontFamily: 'var(--font-playfair)'}}>
                Rockland County Chess Club
              </span>
            </div>
          </div>
          
          <p className="text-lg text-forest-700 mb-4 italic" style={{fontFamily: 'var(--font-baskerville)'}}>
            &ldquo;Building a welcoming chess community in Rockland County&rdquo;
          </p>
          
          <div className="space-y-2 text-burgundy-700" style={{fontFamily: 'var(--font-baskerville)'}}>
            <p>
              70 Main St., 3rd Floor • Nyack, NY 10960
            </p>
            <p>
              Thursdays 7-9 PM
            </p>
            <p>
              Email: info@rocklandchessclub.org
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-amber-500/30">
            <p className="text-sm text-forest-600" style={{fontFamily: 'var(--font-baskerville)'}}>
              &copy; {new Date().getFullYear()} Rockland County Chess Club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}