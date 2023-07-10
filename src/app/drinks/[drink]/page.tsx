import ButtonBack from '@/components/ButtonBack'
import CocktailById from '@/components/CocktailById'
import { Cocktail } from '@/components/DailyCocktail'
import { getCocktailById } from '@/lib/getCocktailById'
import { getIngredientsAndMeasures } from '@/lib/getIngredientsAndMeasures'

interface DrinkProps {
  params: {
    drink: string
  }
}

const DrinkPage = async ({ params: { drink } }: DrinkProps) => {
  const drinkGood = drink.replace(/(-[^-]*)\//, '$1-')
  const drinkId = drinkGood.split('-')[0]

  console.log(drink)
  const drinkDataFetch = getCocktailById(drinkId)
  const drinks: Cocktail = await drinkDataFetch
  const { ingredients, measures } = getIngredientsAndMeasures(drinks)

  return (
    <main className='pt-20'>
      <div className='container mx-auto max-w-7xl flex flex-col gap-10'>
        <CocktailById
          drinks={drinks}
          ingredients={ingredients}
          measures={measures}
        />
        <ButtonBack />
      </div>
    </main>
  )
}

export default DrinkPage
