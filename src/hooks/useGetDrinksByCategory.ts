'use client'

import { useCallback, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Drinks } from '@/components/CocktailByCategory'

const useGetDrinksByCategory = (selected: string) => {
  const [drinksCategory, setDrinksCategory] = useState<Drinks[]>([])

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      if (!selected) return []
      const { data } = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selected}`
      )
      setDrinksCategory(data.drinks.slice(0, 12))
      return data.drinks as Drinks[]
    },
    queryKey: ['category', selected],
    keepPreviousData: true
  })

  const handleMoreDrinks = () => {
    if (data) {
      const lastDisplayedIndex = drinksCategory.length - 1

      const nextIndex = lastDisplayedIndex + 1

      const nextItems = data.slice(nextIndex, nextIndex + 12)

      setDrinksCategory((prevItems) => [...prevItems, ...nextItems])
    }
  }

  return { isLoading, drinksCategory, data, handleMoreDrinks }
}

export default useGetDrinksByCategory
