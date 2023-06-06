export async function getRandomCocktail() {
  const respuesta = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    { cache: 'no-store' }
  )

  if (!respuesta.ok) {
    throw new Error('Failed to fetch data')
  }

  return respuesta.json()
}
