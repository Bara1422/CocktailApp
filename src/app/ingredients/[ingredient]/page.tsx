import ButtonBack from '@/components/ButtonBack'
import Container from '@/components/Container'
import IngredientByName, {
  IngredientProps
} from '@/components/IngredientByName'

import { getIngredientByName } from '@/lib/getIngredientByName'

interface DrinkProps {
  params: {
    ingredient: string
  }
}

const IngredientPage = async ({ params: { ingredient } }: DrinkProps) => {
  const ingredientDataFetch = getIngredientByName(ingredient)
  const ingredients: IngredientProps[] = await ingredientDataFetch

  return (
    <Container>
      <IngredientByName ingredients={ingredients} ingredient={ingredient} />
      <div className='flex justify-end w-full pt-10'>
        <ButtonBack />
      </div>
    </Container>
  )
}

export default IngredientPage
