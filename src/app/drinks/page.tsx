'use client'

import React, { useState, ChangeEvent, useEffect } from 'react'
import Container from '@/components/Container'
import SelectFilter from '@/components/SelectFilter'
import CocktailByCategory, { Drinks } from '@/components/CocktailByCategory'
import { Loader2 } from 'lucide-react'
import useGetDrinksByCategory from '@/hooks/useGetDrinksByCategory'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import SearchFilter from '@/components/SearchFilter'
import { useInViewLogic } from '@/hooks/useInViewLogic'

export interface strCategory {
  strCategory: string
}

interface strResponse {
  value: string
  label: string
}

const FilterCocktailPage = () => {
  const { data: categories, isLoading: loading } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      )

      return data.drinks as strCategory[]
    },
    queryKey: ['categories'],
    keepPreviousData: true
  })

  const formattedCategories: strResponse[] | undefined =
    categories &&
    categories.map((item) => ({
      value: item.strCategory.replace(/ /g, '_'),
      label: item.strCategory
    }))

  const defaultDrink = formattedCategories
    ? formattedCategories[0].value
    : 'Cocktail'

  const [selected, setSelected] = useState<string>(defaultDrink)
  const [drinksFilter, setDrinksFilter] = useState<Drinks[]>([])
  const [value, setValue] = useState<string>('')

  const { drinksCategory, data, isLoading, handleMoreDrinks } =
    useGetDrinksByCategory(selected)

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value)
  }

  const { ref } = useInViewLogic(handleMoreDrinks)

  useEffect(() => {
    setValue('')
  }, [selected])

  if ((isLoading && loading) || !data) {
    return (
      <Loader2 className='absolute w-4 h-4 animate-spin top-1/2 left-1/2' />
    )
  }

  return (
    <Container>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='pb-10 text-5xl font-semibold'>Cocktails</h2>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col-reverse gap-10 md:flex-row '>
          <SelectFilter
            options={formattedCategories}
            value={selected}
            onChange={handleSelectChange}
          />
          <SearchFilter
            selected={selected}
            value={value}
            data={data}
            setDrinksFilter={setDrinksFilter}
            setValue={setValue}
          />
        </div>
      </div>
      <CocktailByCategory
        value={value}
        drinksCategory={drinksCategory}
        drinksFilter={drinksFilter}
      />

      {drinksCategory?.length !== data?.length && (
        <button
          ref={ref}
          disabled={drinksCategory?.length === data?.length}
          onClick={handleMoreDrinks}
          className='flex px-4 py-2 mx-auto border border-white rounded-lg'
        >
          {isLoading ? (
            <span className='flex items-center'>
              <Loader2 className='w-4 h-4 mr-2 animate-spin' />
              Load more
            </span>
          ) : (
            'Load more'
          )}
        </button>
      )}
      <ReactQueryDevtools initialIsOpen={false} />
    </Container>
  )
}

export default FilterCocktailPage
