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
    <main className='w-full px-4 bg-slate-900 text-letters'>
      {title ? (
        <h2 className='py-4 text-5xl text-center border-b'>Random Cocktail</h2>
      ) : (
        ''
      )}
      <h4 className='mb-4 text-3xl font-bold text-center md:text-4xl '>
        {drinks.strDrink}
      </h4>
      <div className='flex flex-col justify-between gap-4 py-4 border-b md:px-4 border-slate-700 md:flex-row'>
        <Image
          src={drinks.strDrinkThumb}
          alt='Random cocktail'
          width={400}
          height={400}
          className='rounded-lg shadow-md mx-auto max-h-[400px] my-auto'
        />

        <div className='flex flex-col md:w-1/2 '>
          <h5 className='mb-1 text-2xl font-semibold md:text-3xl'>
            Ingredients:
          </h5>
          <ul className='flex flex-col gap-1 pb-3 mb-3 border-b border-slate-700'>
            {ingredients.map((ingredient, index) => (
              <li key={index} className='text-lg leading-7 text-white/80'>
                &bull; {ingredient}{' '}
                {measures[index] ? `- ${measures[index]}` : ''}
              </li>
            ))}
          </ul>

          <h5 className='mb-1 text-2xl font-semibold md:text-3xl'>
            Instructions:
          </h5>
          <p className='border-b border-slate-700 pb-3 mb-3 leading-7 text-white/80 text-lg [text-wrap:balance] '>
            {drinks.strInstructions}
          </p>

          <div className='flex justify-between'>
            <div className='w-1/2'>
              <h5 className='mb-1 text-2xl font-semibold md:text-3xl'>Glass</h5>
              <p className='text-lg text-white/70'>{drinks.strGlass}</p>
            </div>

            <div className='w-1/2 text-start'>
              <h5 className='mb-1 text-3xl font-semibold '>Tags</h5>
              <p className='flex flex-row flex-wrap gap-1 text-lg text-white/70'>
                {drinks.strTags?.split(',').map((drink, index, array) => {
                  return (
                    <span key={drink} className='rounded-md '>
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
 <main className='container w-full max-w-6xl px-4 py-20 mx-auto bg-slate-900'>
      <div className='flex flex-col justify-between gap-4 py-4 border-b md:px-4 md:flex-row'>
        <div>
          <h2 className='py-4 text-5xl text-center'>{drinks.strDrink}</h2>
          <Image
            src={drinks.strDrinkThumb}
            alt='Daily cocktail'
            width={400}
            height={400}
            className='rounded-lg shadow-md mx-auto max-h-[400px] my-auto'
          />
        </div>

        <div className='flex flex-col self-end md:w-1/2 '>
          <h5 className='mb-1 text-xl font-semibold'>Ingredients:</h5>
          <ul className='flex flex-col gap-1 pb-3 mb-3 border-b'>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                &bull; {ingredient} - {measures[index]}
              </li>
            ))}
          </ul>

          <h5 className='mb-1 text-xl font-semibold'>Instructions:</h5>
          <p className='pb-3 mb-3 border-b'>{drinks.strInstructions}</p>

          <div className='flex flex-col justify-between md:flex-row'>
            <div className='w-full pb-3 mb-3 border-b md:w-1/2 md:border-none md:pb-0 sm:mb-0'>
              <h5 className='mb-1 text-xl font-semibold'>Glass</h5>
              <p>{drinks.strGlass}</p>
            </div>

            <div className='text-start md:w-1/2'>
              <h5 className='mb-1 text-xl font-semibold'>Tags</h5>
              <p className='flex flex-row flex-wrap gap-1 '>
                {drinks.strTags?.split(',').map((drink) => {
                  return (
                    <span key={drink} className='p-1 border rounded-md'>
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
