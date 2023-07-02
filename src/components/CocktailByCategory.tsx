import { getDrinksFilter } from '@/lib/getDrinksFilter'
import React from 'react'
import { Cocktail } from './DailyCocktail'
import Link from 'next/link'
import Image from 'next/image'

export interface Drinks {
  strDrink: string
  strDrinkThumb: string
  idDrink: string
}

interface Props {
  drinksCategory: Drinks[]
}

const CocktailByCategory = ({ drinksCategory }: Props) => {
  return (
    <ul className='flex flex-wrap gap-20 justify-center py-10'>
      {drinksCategory &&
        drinksCategory.map((drink: Drinks) => {
          const drinkNameWithHyphens = drink.strDrink.replace(/ /g, '-')
          return (
            <div key={drink.idDrink}>
              <Link
                href={`/drinks/${drink.idDrink}-${drinkNameWithHyphens}`}
                className='flex flex-col w-[200px] text-slate-400 hover:text-slate-100  hover:scale-105 transition-all'
              >
                <Image
                  width={200}
                  height={200}
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  className='rounded-md'
                />
                <h5 className=' text-center pt-1'>{drink.strDrink}</h5>
              </Link>
            </div>
          )
        })}
    </ul>
  )
}

export default CocktailByCategory
