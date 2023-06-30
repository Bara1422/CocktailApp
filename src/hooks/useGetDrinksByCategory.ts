import { useCallback, useEffect, useState } from 'react'

const useGetDrinksByCategory = (selected: string) => {
  const [drinksCategory, setDrinksCategory] = useState([])
  const [drinksData, setDrinksData] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchDrinksByCategory = useCallback(async (value: string) => {
    setIsLoading(true)
    const data = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`
    )

    if (!data.ok) {
      throw new Error('Something went wrong')
    }

    const { drinks } = await data.json()
    setDrinksData(drinks)
    setDrinksCategory(drinks.slice(0, 12))
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchDrinksByCategory(selected)
  }, [selected, fetchDrinksByCategory])

  const handleMoreDrinks = () => {
    const lastDisplayedIndex = drinksCategory.length - 1

    const nextIndex = lastDisplayedIndex + 1

    const nextItems = drinksData.slice(nextIndex, nextIndex + 12)

    if (nextIndex >= drinksData.length - 1) {
    }

    setDrinksCategory((prevItems) => [...prevItems, ...nextItems])
  }

  return { isLoading, drinksCategory, drinksData, handleMoreDrinks }
}

export default useGetDrinksByCategory
