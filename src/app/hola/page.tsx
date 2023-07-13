import React from 'react'
import Container from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'
import getAllIngredients from '@/lib/getAllIngredients'

interface Ingredients {
  strIngredient1: string
}

const Ingredients = async () => {
  const ingredientsFetch = getAllIngredients()
  const ingredientsTotal: Ingredients[] = await ingredientsFetch

  return (
    <Container>
      <ul className='flex flex-wrap gap-6 pt-20 '>
        {ingredientsTotal.map((item) => {
          const ingretientForUrl = item.strIngredient1.replace(/ /g, '_')
          const ingretientForImageUrl = item.strIngredient1.replace(/ /g, '%20')
          return (
            <li
              className='cursor-pointer text-center hover:border-white border-2 p-4 rounded-lg border-slate-500 transition-all max-w-[300px] w-[200px] h-[230px] hover:scale-105'
              key={item.strIngredient1}
            >
              <Link href={`/ingredients/${ingretientForUrl}`}>
                <Image
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
        })}
      </ul>
    </Container>
  )
}

export default Ingredients
