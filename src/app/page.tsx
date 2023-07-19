import CocktailById from '@/components/CocktailById'
import { Cocktail } from '@/components/DailyCocktail'
import SearchCocktail from '@/components/SearchCocktail'
import WantSection from '@/components/WantSection'
import { getIngredientsAndMeasures } from '@/lib/getIngredientsAndMeasures'
import { getRandomCocktail } from '@/lib/getRandomCocktail'

export default async function Home() {
  const res = getRandomCocktail()
  const resCocktail: Cocktail = await res

  const { ingredients, measures } = getIngredientsAndMeasures(resCocktail)

  return (
    <main className='pb-10 bg-slate-900 text-white/90 '>
      <div className='container mx-auto max-w-7xl'>
        <SearchCocktail />

        <CocktailById
          drinks={resCocktail}
          ingredients={ingredients}
          measures={measures}
          title
        />
        <div className='flex flex-col items-center min-h-full gap-4 m-4 mt-10 sm:gap-2 md:gap-10 sm:justify-center sm:flex-row sm:items-start'>
          <div className='flex flex-col gap-4 sm:flex-row'>
            <WantSection
              title='Do you have a cocktail in mind?'
              text='Visit our drinks section and search by category and name.'
              page='drinks'
            />
            <WantSection
              title='Do you want a cocktail with the ingredient you have?'
              text='Visit our ingredients section and discover all the cocktails you can make.'
              page='ingredients'
            />
          </div>
        </div>
      </div>
    </main>
  )
}
