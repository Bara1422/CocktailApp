/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

export interface Drinks {
  strDrink: string
  strDrinkThumb: string
  idDrink: string
}

interface Props {
  drinksCategory: Drinks[]
  drinksFilter: Drinks[]
  value: string
}

const CocktailByCategory = ({ drinksCategory, drinksFilter, value }: Props) => {
  const drinksRender = value ? drinksFilter : drinksCategory

  if (drinksRender.length === 0) {
    return (
      <p className='flex flex-col justify-center items-start py-14 text-2xl w-1/2 mx-auto [text-wrap:balance] '>
        No cocktails founds with that name in this category.
        <span className='flex pt-2 just'>
          {' '}
          If you want a full search, try in the Search by letter section or try
          in each category filter.
        </span>
      </p>
    )
  }

  return (
    <ul className=' md:gap-10 gap-5 grid grid-cols-[repeat(auto-fill,200px)] md:justify-between justify-around  py-10'>
      {drinksRender.map((drink: Drinks) => {
        const drinkNameWithHyphens = drink.strDrink.replace(/[ /]/g, '-')

        return (
          <li key={drink.idDrink}>
            <Link
              prefetch={false}
              href={`/drinks/${drink.idDrink}-${drinkNameWithHyphens}`}
              className='flex flex-col w-[200px] text-slate-400 hover:text-slate-100  hover:scale-105 transition-all'
            >
              <img
                width={200}
                height={200}
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className='rounded-md'
              />
              <h5 className='pt-1 text-center '>{drink.strDrink}</h5>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default CocktailByCategory
