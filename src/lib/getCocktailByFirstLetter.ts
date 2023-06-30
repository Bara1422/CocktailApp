export async function getCocktailByFirstLetter(letter: string) {
  const respuesta = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
  )

  if (!respuesta.ok) {
    throw new Error('Something went wrong at search cocktail by letter')
  }
  const { drinks } = await respuesta.json()

  return drinks
}
