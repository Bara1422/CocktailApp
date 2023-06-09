export default async function getAllIngredients() {
  const respuesta = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
  )

  if (!respuesta.ok) {
    throw new Error('Something went wrong')
  }

  const { drinks } = await respuesta.json()

  return drinks
}
