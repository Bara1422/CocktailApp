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
  const drinkId = drink.split('-')[0]
  const drinkDataFetch = getCocktailById(drinkId)
  const drinks: Cocktail = await drinkDataFetch
  const { ingredients, measures } = getIngredientsAndMeasures(drinks)

  return (
    <CocktailById
      drinks={drinks}
      ingredients={ingredients}
      measures={measures}
    />
  )
}

export default DrinkPage
