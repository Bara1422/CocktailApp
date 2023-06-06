import { FC } from 'react'
import { Cocktail } from './DailyCocktail'
import Image from 'next/image'
import { getIngredientsAndMeasures } from '@/lib/getIngredientsAndMeasures'
import Link from 'next/link'

interface CocktailByIdProps {
  drinks: Cocktail
  ingredients: string[]
  measures: string[]
}

const CocktailById: FC<CocktailByIdProps> = ({
  drinks,
  ingredients,
  measures
}) => {
  console.log(drinks.strTags?.split(','))
  return (
    <main className='w-full bg-slate-900 px-4 py-20 container max-w-6xl mx-auto'>
      <div className='flex justify-between md:px-4 border-b py-4 md:flex-row flex-col gap-4'>
        <div>
          <h2 className='text-center text-5xl py-4'>{drinks.strDrink}</h2>
          <Image
            src={drinks.strDrinkThumb}
            alt='Daily cocktail'
            width={400}
            height={400}
            className='rounded-lg shadow-md mx-auto'
          />
        </div>

        <div className='flex flex-col md:w-1/2 self-end '>
          <h5 className='text-xl font-semibold mb-1'>Ingredients:</h5>
          <ul className='flex flex-col gap-1 border-b pb-3 mb-3'>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                &bull; {ingredient} - {measures[index]}
              </li>
            ))}
          </ul>

          <h5 className='text-xl font-semibold mb-1'>Instructions:</h5>
          <p className='border-b pb-3 mb-3'>{drinks.strInstructions}</p>

          <div className='flex justify-between md:flex-row flex-col'>
            <div className='md:w-1/2 border-b md:border-none md:pb-0 sm:mb-0 w-full pb-3 mb-3'>
              <h5 className='text-xl font-semibold mb-1'>Glass</h5>
              <p>{drinks.strGlass}</p>
            </div>

            <div className='text-start md:w-1/2'>
              <h5 className='text-xl font-semibold mb-1'>Tags</h5>
              <p className='flex flex-row flex-wrap gap-1 '>
                {drinks.strTags?.split(',').map((drink) => {
                  return (
                    <span key={drink} className='border p-1 rounded-md'>
                      {drink}
                    </span>
                  )
                }) ?? 'No tags'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default CocktailById
