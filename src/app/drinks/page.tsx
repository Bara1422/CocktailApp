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

  console.log(drinksFilter)

  if ((isLoading && loading) || !data) {
    return (
      <Loader2 className='w-4 h-4 animate-spin absolute top-1/2 left-1/2' />
    )
  }

  return (
    <Container>
      <div className='flex justify-center flex-col items-center'>
        <h2 className='text-5xl font-semibold pb-10'>Cocktails</h2>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col-reverse md:flex-row  gap-10 '>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </Container>
  )
}

export default FilterCocktailPage
