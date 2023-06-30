'use client'

import React, { useState, ChangeEvent } from 'react'
import Container from '@/components/Container'
import SelectFilter, { Options } from '@/components/SelectFilter'
import CocktailByCategory from '@/components/CocktailByCategory'
import { Loader2 } from 'lucide-react'
import useGetDrinksByCategory from '@/hooks/useGetDrinksByCategory'

const CATEGORY_OPTIONS: Options[] = [
  { value: 'cocktail', label: 'Cocktail' },
  { value: 'shot', label: 'Shot' },
  { value: 'ordinary_drink', label: 'Ordinary Drink' },
  { value: 'other_/_unknown', label: 'Other / Unknown' },
  { value: 'coffee_/_tea', label: 'Coffee / Tea' }
]

const FilterCocktailPage = () => {
  const [selected, setSelected] = useState<string>('cocktail')
  const { drinksCategory, drinksData, isLoading, handleMoreDrinks } =
    useGetDrinksByCategory(selected)

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value)
  }

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
      <CocktailByCategory drinksCategory={drinksCategory} />

      {drinksCategory.length !== drinksData.length && (
        <button
          disabled={drinksCategory.length === drinksData.length}
          onClick={handleMoreDrinks}
          className='border border-white px-4 py-2 mx-auto flex rounded-lg'
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
