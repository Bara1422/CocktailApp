import { DailyCocktail } from '@/components/DailyCocktail'
import SearchCocktail from '@/components/SearchCocktail'
import SelectFilter from '@/components/SelectFilter'

export default function Home() {
  return (
    <main className='bg-slate-900 pb-10 '>
      <div className='container mx-auto max-w-6xl'>
        <SearchCocktail />

        <DailyCocktail />
      </div>
    </main>
  )
}
