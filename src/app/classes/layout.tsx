import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chess Classes for Kids & Adults in Nyack | Rockland County Chess Club',
  description:
    'Five-week chess class sessions for kids and adults in Nyack, NY. Beginner-friendly instruction from experienced club members. Adult classes are free with club membership.',
  keywords:
    'chess classes Nyack, kids chess lessons Rockland County, adult chess classes NY, learn chess Nyack',
  openGraph: {
    title: 'Chess Classes | Rockland County Chess Club',
    description:
      'Five-week chess class sessions for kids and adults in Nyack, NY, taught by experienced club members.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function ClassesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
