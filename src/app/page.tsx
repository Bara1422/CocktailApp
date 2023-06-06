import { DailyCocktail } from '@/components/DailyCocktail'
import SearchCocktail from '@/components/SearchCocktail'

export default function Home() {
  return (
    <main className='bg-slate-900 pb-10'>
      <div className='container mx-auto max-w-6xl'>
        <SearchCocktail />
        {/* @ts-expect-error Server Component */}
        <DailyCocktail />
      </div>
    </main>
  )
}
