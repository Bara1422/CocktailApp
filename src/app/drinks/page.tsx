'use client'

import React, { useState, ChangeEvent, useEffect, useCallback } from 'react'
import Container from '@/components/Container'
import SelectFilter, { Options } from '@/components/SelectFilter'
import CocktailByCategory from '@/components/CocktailByCategory'
import { Loader2 } from 'lucide-react'

const CATEGORY_OPTIONS: Options[] = [
  { value: 'cocktail', label: 'Cocktail' },
  { value: 'shot', label: 'Shot' },
  { value: 'ordinary_drink', label: 'Ordinary Drink' },
  { value: 'other_/_unknown', label: 'Other / Unknown' },
  { value: 'coffee_/_tea', label: 'Coffee / Tea' }
]

const FilterCocktailPage = () => {
  const [selected, setSelected] = useState<string>('cocktail')
  const [drinksCategory, setDrinksCategory] = useState([])
  const [drinksData, setDrinksData] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value)
  }

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
      console.log('first')
    }

    setDrinksCategory((prevItems) => [...prevItems, ...nextItems])
  }

  console.log(drinksCategory)

  return (
    <Container>
      <div className='flex justify-center flex-col items-center'>
        <h2 className='text-5xl font-semibold pb-10'>Cocktails</h2>
      </div>
      <div className='flex justify-center items-center flex-col max-w-[200px] mx-auto'>
        <SelectFilter
          options={CATEGORY_OPTIONS}
          value={selected}
          onChange={handleSelectChange}
        />
      </div>
      <CocktailByCategory category={selected} drinksCategory={drinksCategory} />

      {drinksCategory.length !== drinksData.length && (
        <button
          disabled={drinksCategory.length === drinksData.length}
          onClick={handleMoreDrinks}
          className='border border-white px-4 py-2'
        >
          {isLoading ? (
            <span className='flex items-center'>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Load more
            </span>
          ) : (
            'Load more'
          )}
        </button>
      )}
    </Container>
  )
}

export default FilterCocktailPage
