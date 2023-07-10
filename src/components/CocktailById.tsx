import { FC } from 'react'
import { Cocktail } from './DailyCocktail'
import Image from 'next/image'

interface CocktailByIdProps {
  drinks: Cocktail
  ingredients: string[]
  measures: string[]
  title?: boolean
}

const CocktailById: FC<CocktailByIdProps> = ({
  drinks,
  ingredients,
  measures,
  title
}) => {
  return (
    <main className='w-full bg-slate-900 px-4 text-letters'>
      {title ? (
        <h2 className='text-center text-5xl py-4 border-b'>Random Cocktail</h2>
      ) : (
        ''
      )}
      <h4 className='text-3xl md:text-4xl mb-4 text-center font-bold  '>
        {drinks.strDrink}
      </h4>
      <div className='flex justify-between md:px-4 border-b border-slate-700 py-4 md:flex-row flex-col gap-4'>
        <Image
          src={drinks.strDrinkThumb}
          alt='Random cocktail'
          width={400}
          height={400}
          className='rounded-lg shadow-md mx-auto max-h-[400px] my-auto'
        />

        <div className='flex flex-col md:w-1/2 '>
          <h5 className='text-2xl md:text-3xl font-semibold mb-1'>
            Ingredients:
          </h5>
          <ul className='flex flex-col gap-1 border-b border-slate-700  pb-3 mb-3'>
            {ingredients.map((ingredient, index) => (
              <li key={index} className='text-lg text-white/80 leading-7'>
                &bull; {ingredient}{' '}
                {measures[index] ? `- ${measures[index]}` : ''}
              </li>
            ))}
          </ul>

          <h5 className='text-2xl md:text-3xl font-semibold mb-1'>
            Instructions:
          </h5>
          <p className='border-b border-slate-700 pb-3 mb-3 leading-7 text-white/80 text-lg [text-wrap:balance] '>
            {drinks.strInstructions}
          </p>

          <div className='flex justify-between'>
            <div className='w-1/2'>
              <h5 className='text-2xl md:text-3xl font-semibold mb-1'>Glass</h5>
              <p className='text-lg text-white/70'>{drinks.strGlass}</p>
            </div>

            <div className='text-start w-1/2'>
              <h5 className='text-3xl font-semibold mb-1 '>Tags</h5>
              <p className='flex flex-row flex-wrap gap-1 text-lg text-white/70'>
                {drinks.strTags?.split(',').map((drink, index, array) => {
                  return (
                    <span key={drink} className=' rounded-md'>
                      {drink}
                      {index < array.length - 1 ? ' -' : ''}
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

/* 
 <main className='w-full bg-slate-900 px-4 py-20 container max-w-6xl mx-auto'>
      <div className='flex justify-between md:px-4 border-b py-4 md:flex-row flex-col gap-4'>
        <div>
          <h2 className='text-center text-5xl py-4'>{drinks.strDrink}</h2>
          <Image
            src={drinks.strDrinkThumb}
            alt='Daily cocktail'
            width={400}
            height={400}
            className='rounded-lg shadow-md mx-auto max-h-[400px] my-auto'
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
     */
