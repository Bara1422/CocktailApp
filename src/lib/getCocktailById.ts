export async function getCocktailById(id: string) {
  const respuesta = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  )

  if (!respuesta.ok) {
    throw new Error('Something went wrong at search cocktail by ID')
  }

  const { drinks } = await respuesta.json()
  console.log(drinks[0])
  return drinks[0]
}
