import ButtonBack from '@/components/ButtonBack'
import CocktailById from '@/components/CocktailById'
import { Cocktail } from '@/components/DailyCocktail'
import IngredientByName, {
  IngredientProps
} from '@/components/IngredientByName'
import { getCocktailById } from '@/lib/getCocktailById'
import {
  getIngredientByName,
  getIngredientThumbnails
} from '@/lib/getIngredientByName'
import { getIngredientsAndMeasures } from '@/lib/getIngredientsAndMeasures'

interface DrinkProps {
  params: {
    ingredient: string
  }
}

const IngredientPage = async ({ params: { ingredient } }: DrinkProps) => {
  const ingredientDataFetch = getIngredientByName(ingredient)
  const ingredients: IngredientProps[] = await ingredientDataFetch

  return (
    <>
      <IngredientByName ingredients={ingredients} ingredient={ingredient} />
      <ButtonBack />
    </>
  )
}

export default IngredientPage
