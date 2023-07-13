'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ArrowBigUp } from 'lucide-react'
import ScrollToTop from 'react-scroll-to-top'

const Providers = ({ children }: { children: React.ReactNode }) => {
  const query = new QueryClient()

  return (
    <QueryClientProvider client={query}>
      {children}{' '}
      <ScrollToTop
        component={<ArrowBigUp />}
        className='flex items-center justify-center rounded-full md:hidden text-slate-200 bg-slate-900'
        style={{
          border: '2px solid rgb(226 232 240)',
          backgroundColor: 'rgb(15 23 42)'
        }}
        smooth
      />
    </QueryClientProvider>
  )
}

export default Providers
