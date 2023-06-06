import { FC } from 'react'
import { data } from '@/mock'
import Image from 'next/image'
import { getRandomCocktail } from '@/lib/getRandomCocktail'

export interface Cocktail {
  idDrink: string
  strDrink: string
  strCategory: string
  strInstructions: string
  strInstructionsES: string
  strDrinkThumb: string
  strGlass: string
  strTags: string | null
  [key: string]: string | number | null | undefined
}

interface ApiResponse {
  drinks: Cocktail[]
}

export const DailyCocktail = async () => {
  const res: Promise<ApiResponse> = getRandomCocktail()
  const randomCocktail = await res

  const resCocktail: Cocktail = randomCocktail.drinks[0]

  let ingredients = []
  let measures: any = []

  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}`
    const measureKey = `strMeasure${i}`

    if (ingredientKey in resCocktail && resCocktail[ingredientKey]) {
      ingredients.push(resCocktail[ingredientKey])
      measures.push(resCocktail[measureKey])
    }
  }

  const content = (
    <main className='w-full bg-slate-900 px-4'>
      <h2 className='text-center text-5xl py-4'>Random Cocktail</h2>
      <div className='flex justify-between md:px-4 border-b py-4 md:flex-row flex-col gap-4'>
        <Image
          src={resCocktail.strDrinkThumb}
          alt='Daily cocktail'
          width={400}
          height={400}
          className='rounded-lg shadow-md mx-auto'
        />

        <div className='flex flex-col md:w-1/2 '>
          <h4 className='text-4xl mb-4 text-center'>{resCocktail.strDrink}</h4>
          <h5 className='text-xl font-semibold mb-1'>Ingredients:</h5>
          <ul className='flex flex-col gap-1 border-b pb-3 mb-3'>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                &bull; {ingredient} - {measures[index]}
              </li>
            ))}
          </ul>

          <h5 className='text-xl font-semibold mb-1'>Instructions:</h5>
          <p className='border-b pb-3 mb-3'>{resCocktail.strInstructions}</p>

          <div className='flex justify-between'>
            <div className='w-1/2'>
              <h5 className='text-xl font-semibold mb-1'>Glass</h5>
              <p>{resCocktail.strGlass}</p>
            </div>

            <div className='text-start w-1/2'>
              <h5 className='text-xl font-semibold mb-1'>Tags</h5>
              <p className='flex flex-row flex-wrap gap-1 '>
                {resCocktail.strTags?.split(',').map((drink) => {
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

  return content
}
