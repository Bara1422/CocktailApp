export const getDrinksFilter = async (value: string) => {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`
  )

  if (!res.ok) {
    throw new Error('Something went wrong')
  }

  return res.json()
}
