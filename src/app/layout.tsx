import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Alphabet from '@/components/Alphabet'
import Providers from '@/components/Providers'
import ScrollToTop from 'react-scroll-to-top'
import { ArrowBigUp } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Cocktail App',
    template: `%s | Cocktail App`
  },
  description:
    'Cocktail web with more of 100 cocktails and ingredients, with instructions and images.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-slate-900 min-h-screen text-white `}
      >
        <Providers>
          <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-grow'>{children}</div>

            <Alphabet />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
