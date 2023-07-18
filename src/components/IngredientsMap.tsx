/* eslint-disable @next/next/no-img-element */
import Ingredients from '@/app/ingredients/page'

import Link from 'next/link'
import React from 'react'

const IngredientsMap = ({
  ingredientsRender
}: {
  ingredientsRender: Ingredients[]
}) => {
  if (ingredientsRender.length === 0) {
    return (
      <p className='flex flex-col justify-center items-start py-14 text-2xl w-1/2 mx-auto [text-wrap:balance] '>
        No ingredient with this name was found, please try another name e.g.
        &quot;vodka&quot;.
      </p>
    )
  }

  return (
    <ul className='mt-6 md:gap-10 gap-5 grid grid-cols-[repeat(auto-fill,200px)] md:justify-between justify-around'>
      {ingredientsRender.map((item) => {
        const ingretientForUrl = item.strIngredient1.replace(/ /g, '_')
        const ingretientForImageUrl = item.strIngredient1.replace(/ /g, '%20')
        return (
          <li
            className='cursor-pointer text-center hover:border-white border-2 p-4 rounded-lg border-slate-700 transition-all max-w-[300px] w-[200px] h-[230px]'
            key={item.strIngredient1}
          >
            <Link href={`/ingredients/${ingretientForUrl}`}>
              <img
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
  )
}

export default IngredientsMap
