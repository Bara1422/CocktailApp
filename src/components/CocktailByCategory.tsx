import { getDrinksFilter } from '@/lib/getDrinksFilter'
import React from 'react'
import { Cocktail } from './DailyCocktail'
import Link from 'next/link'
import Image from 'next/image'

interface Drinks {
  strDrink: string
  strDrinkThumb: string
  idDrink: string
}

interface Props {
  category: string
  drinksCategory: Drinks[]
}

const CocktailByCategory = ({ category, drinksCategory }: Props) => {
  console.log(drinksCategory)

  return (
    <ul className='flex flex-wrap gap-20 justify-center py-10'>
      {drinksCategory &&
        drinksCategory.map((drink: Drinks) => {
          const drinkNameWithHyphens = drink.strDrink.replace(/ /g, '-')
          return (
            <div key={drink.idDrink}>
              <Link
                href={`/drinks/${drink.idDrink}-${drinkNameWithHyphens}`}
                className='flex flex-col w-[200px] text-slate-400 hover:text-slate-100'
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
