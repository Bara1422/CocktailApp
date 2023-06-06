import { Cocktail } from '@/components/DailyCocktail'

export function getIngredientsAndMeasures(cocktail: Cocktail): {
  ingredients: string[]
  measures: string[]
} {
  let ingredients: any = []
  let measures: any = []

  console.log(cocktail)

  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}`
    const measureKey = `strMeasure${i}`

    if (ingredientKey in cocktail && cocktail[ingredientKey]) {
      ingredients.push(cocktail[ingredientKey])
      measures.push(cocktail[measureKey])
    }
  }
  return { ingredients, measures }
}
