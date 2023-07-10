import CocktailById from '@/components/CocktailById'
import { Cocktail, DailyCocktail } from '@/components/DailyCocktail'
import SearchCocktail from '@/components/SearchCocktail'
import { getIngredientsAndMeasures } from '@/lib/getIngredientsAndMeasures'
import { getRandomCocktail } from '@/lib/getRandomCocktail'

export default async function Home() {
  const res = getRandomCocktail()
  const resCocktail: Cocktail = await res

  const { ingredients, measures } = getIngredientsAndMeasures(resCocktail)

  return (
    <main className='bg-slate-900 pb-10 '>
      <div className='container mx-auto max-w-7xl'>
        <SearchCocktail />

        <CocktailById
          drinks={resCocktail}
          ingredients={ingredients}
          measures={measures}
        />
      </div>
    </main>
  )
}
