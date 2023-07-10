import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
  return (
    <ul className='flex flex-wrap gap-20 justify-center py-10'>
      {drinksRender.length > 0 ? (
        drinksRender.map((drink: Drinks) => {
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
        })
      ) : (
        <p className='text-xl'>
          Doesn&apos;t find cocktails with this name. If you wanna a full
          search, try in the Search by letter section.
        </p>
      )}
    </ul>
  )
}

export default CocktailByCategory
