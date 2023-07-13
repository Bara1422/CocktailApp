'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import Container from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import SearchFilter from '@/components/SearchFilter'
import IngredientsFilter from '@/components/IngredientsFilter'

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

      const nextItems = data.slice(nextIndex, nextIndex + 15)

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
      <ul className='mt-6 md:gap-10 gap-5 grid grid-cols-[repeat(auto-fill,200px)] md:justify-between justify-around'>
        {ingredientsRender.length > 0 ? (
          ingredientsRender.map((item) => {
            const ingretientForUrl = item.strIngredient1.replace(/ /g, '_')
            const ingretientForImageUrl = item.strIngredient1.replace(
              / /g,
              '%20'
            )
            return (
              <li
                className='cursor-pointer text-center hover:border-white border-2 p-4 rounded-lg border-slate-700 transition-all max-w-[300px] w-[200px] h-[230px]'
                key={item.strIngredient1}
              >
                <Link href={`/ingredients/${ingretientForUrl}`}>
                  <Image
                    priority={true}
                    width={150}
                    height={150}
                    alt={`${item.strIngredient1}`}
                    src={`https://www.thecocktaildb.com/images/ingredients/${ingretientForImageUrl}-Medium.png`}
                    className='pb-2 mx-auto'
                  />
                  <span>{item.strIngredient1}</span>
                </Link>
              </li>
            )
          })
        ) : (
          <p className='text-xl'>
            Doesn&apos;t find ingredients with this name.
          </p>
        )}

        {ingredients?.length !== data?.length && (
          <button
            ref={ref}
            disabled={ingredients?.length === data?.length}
            className='flex px-4 py-2 mx-auto border border-white rounded-lg'
          ></button>
        )}
      </ul>
    </Container>
  )
}

export default Ingredients
