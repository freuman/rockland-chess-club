import Image from 'next/image'
import Hero from '@/components/home/Hero'
import InfoCards from '@/components/home/InfoCards'
import UpcomingEvents from '@/components/home/UpcomingEvents'
import NewsletterSignup from '@/components/home/NewsletterSignup'
import Toast from '@/components/ui/Toast'
import { communityCards } from '@/data/community-cards'
import { announcements } from '@/data/announcements'

const gallery = [
  { src: '/images/conentrating-people.jpeg', alt: 'Players concentrating during a match' },
  { src: '/images/thinking-kid.jpeg', alt: 'Young player contemplating their next move' },
  { src: '/images/multiplayer.jpg', alt: 'Multiple chess games in progress' },
  { src: '/images/onlooker-kid.jpeg', alt: 'Young spectator watching a game' },
  { src: '/images/simultaneous.jpg', alt: 'Simultaneous chess exhibition' },
  { src: '/images/DSC_3653.JPG', alt: 'Chess club members socializing between games' },
]

export default function Home() {
  return (
    <>
      <Hero communityCards={communityCards} />
      <InfoCards />

      <section className="bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2
              className="text-3xl font-bold text-burgundy-800 sm:text-4xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Our Chess Community
            </h2>
            <p
              className="mx-auto mt-4 max-w-2xl text-lg text-forest-700"
              style={{ fontFamily: 'var(--font-baskerville)' }}
            >
              From casual games to intense competitions, this is what a Thursday night
              looks like.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((photo) => (
              <div key={photo.src} className="elegant-card overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <UpcomingEvents />
      <NewsletterSignup />

      <Toast announcements={announcements} />
    </>
  )
}
