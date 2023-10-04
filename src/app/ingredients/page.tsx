'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import Container from '@/components/Container'

import { useInView } from 'react-intersection-observer'
import IngredientsFilter from '@/components/IngredientsFilter'
import IngredientsMap from '@/components/IngredientsMap'

interface Ingredients {
  strIngredient1: string
}

const Ingredients = () => {
  const { ref, inView } = useInView()
  const [ingredients, setIngredients] = useState<Ingredients[]>([])
  const [value, setValue] = useState<string>('')
  const [ingredientsFilter, setIngredientsFilter] = useState<Ingredients[]>([])

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
      )
      setIngredients(data.drinks.slice(0, 20))
      return data.drinks as Ingredients[]
    },
    queryKey: ['ingredients']
  })

  const handleMoreIngredients = useCallback(() => {
    if (data) {
      const lastDisplayedIndex = ingredients.length - 1

      const nextIndex = lastDisplayedIndex + 1

      const nextItems = data.slice(nextIndex, nextIndex + 10)

      setIngredients((prevItems) => [...prevItems, ...nextItems])
    }
  }, [data, ingredients.length])

  useEffect(() => {
    if (inView) {
      handleMoreIngredients()
    }
  }, [handleMoreIngredients, inView])

  if (isLoading || !data) {
    return (
      <div className='flex items-center justify-center pt-52'>
        <Loader2 className='flex items-center justify-center w-10 h-10 animate-spin' />
      </div>
    )
  }

  const ingredientsRender = value ? ingredientsFilter : ingredients

  return (
    <Container>
      <h3 className='flex justify-center text-4xl font-semibold md:text-5xl'>
        Ingredients
      </h3>
      <IngredientsFilter
        data={data}
        setIngredientFilter={setIngredientsFilter}
        setValue={setValue}
        value={value}
      />
      <IngredientsMap ingredientsRender={ingredientsRender} />

      {ingredients?.length !== data?.length && (
        <button
          ref={ref}
          disabled={ingredients?.length === data?.length}
          className='flex px-4 py-2 mx-auto border border-white rounded-lg'
        ></button>
      )}
    </Container>
  )
}

export default Ingredients
