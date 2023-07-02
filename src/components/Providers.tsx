'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const Providers = ({ children }: { children: React.ReactNode }) => {
  const query = new QueryClient()

  return <QueryClientProvider client={query}>{children}</QueryClientProvider>
}

export default Providers
