export async function getIngredientByName(name: string) {
  const respuesta = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
  )
  if (!respuesta.ok) {
    throw new Error('Something went wrong at search ingredient by name')
  }

  const { drinks } = await respuesta.json()

  return drinks
}

export async function getIngredientThumbnails(name: string) {
  const respuesta = await fetch(
    `https://www.thecocktaildb.com/images/ingredients/${name}.png`
  )

  const thumb = await respuesta.json()

  return thumb
}
