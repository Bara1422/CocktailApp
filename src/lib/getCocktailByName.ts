export async function getCocktailByName(name: string) {
  const respuesta = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  )
  if (!respuesta.ok) {
    throw new Error('Something went wrong at search cocktail by name')
  }

  return respuesta.json()
}
