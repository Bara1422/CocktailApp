'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import Container from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'

interface Ingredients {
  strIngredient1: string
}

const Ingredients = () => {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
      )

      return data.drinks as Ingredients[]
    },
    queryKey: ['ingredients']
  })

  console.log(data)

  if (isLoading) {
    return <Loader2 className='w-4 h-4 animate-spin' />
  }
  return (
    <Container>
      <ul className='pt-20 flex flex-wrap gap-6 '>
        {data &&
          data?.map((item) => {
            const ingretientForUrl = item.strIngredient1.replace(/ /g, '_')
            const ingretientForImageUrl = item.strIngredient1.replace(
              / /g,
              '%20'
            )
            return (
              <li
                className='cursor-pointer text-center hover:border-white border-2 p-4 rounded-lg border-slate-500 transition-all max-w-[300px] w-[200px] h-[230px]'
                key={item.strIngredient1}
              >
                <Link href={`/ingredients/${ingretientForUrl}`}>
                  <Image
                    width={150}
                    height={150}
                    alt={`${item.strIngredient1}`}
                    src={`https://www.thecocktaildb.com/images/ingredients/${ingretientForImageUrl}-Medium.png`}
                    className='mx-auto pb-2'
                  />
                  <span>{item.strIngredient1}</span>
                </Link>
              </li>
            )
          })}
      </ul>
    </Container>
  )
}

export default Ingredients
