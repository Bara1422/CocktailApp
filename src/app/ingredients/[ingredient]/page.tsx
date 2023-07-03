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
  /* const ingredientThumbDataFetch = getIngredientThumbnails(ingredient)
  const ingredientThumb = await ingredientThumbDataFetch
 */
  console.log(ingredient)
  console.log(ingredients)
  /*   console.log(ingredientThumb)
   */
  return <IngredientByName ingredients={ingredients} ingredient={ingredient} />
}

export default IngredientPage