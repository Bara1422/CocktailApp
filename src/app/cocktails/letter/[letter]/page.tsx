import { Cocktail } from '@/components/DailyCocktail'
import { getCocktailByFirstLetter } from '@/lib/getCocktailByFirstLetter'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  params: {
    letter: string
  }
}

const LetterPage = async ({ params: { letter } }: Props) => {
  const res = getCocktailByFirstLetter(letter)
  const drinks = await res

  return (
    <div className='flex flex-col items-center w-full p-4 py-24 mx-auto max-w-7xl'>
      <h2 className='pb-20 text-5xl'>Cocktails found:</h2>
      {!drinks ? (
        <h4 className='text-xl'>Not results, try another letter</h4>
      ) : null}

      <ul className='md:gap-10 gap-5 grid grid-cols-[repeat(auto-fill,200px)] md:justify-between justify-around w-full'>
        {drinks &&
          drinks.map((drink: Cocktail) => {
            const drinkNameWithHyphens = drink.strDrink.replace(/ /g, '-')
            return (
              <li key={drink.idDrink}>
                <Link
                  href={`/drinks/${drink.idDrink}-${drinkNameWithHyphens}`}
                  className='flex flex-col w-[200px] text-slate-400 hover:text-slate-100 hover:scale-105 transition-transform duration-300'
                >
                  <Image
                    width={200}
                    height={200}
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    className='rounded-md'
                  />
                  <h5 className='pt-1 font-semibold text-center '>
                    {drink.strDrink}
                  </h5>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default LetterPage
