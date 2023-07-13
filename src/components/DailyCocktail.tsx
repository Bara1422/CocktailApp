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

  return (
    <main className='w-full px-4 bg-slate-900 text-letters'>
      <h2 className='py-4 text-5xl text-center border-b'>Random Cocktail</h2>
      <div className='flex flex-col justify-between gap-4 py-4 border-b md:px-4 md:flex-row'>
        <Image
          src={resCocktail.strDrinkThumb}
          alt='Random cocktail'
          width={400}
          height={400}
          className='rounded-lg shadow-md mx-auto max-h-[400px] my-auto'
        />

        <div className='flex flex-col md:w-1/2 '>
          <h4 className='mb-4 text-5xl font-bold text-center '>
            {resCocktail.strDrink}
          </h4>
          <h5 className='mb-1 text-3xl font-semibold'>Ingredients:</h5>
          <ul className='flex flex-col gap-1 pb-3 mb-3 border-b'>
            {ingredients.map((ingredient, index) => (
              <li key={index} className='text-xl leading-7 text-white/80'>
                &bull; {ingredient} - {measures[index]}
              </li>
            ))}
          </ul>

          <h5 className='mb-1 text-3xl font-semibold'>Instructions:</h5>
          <p className='pb-3 mb-3 text-xl leading-7 border-b text-white/80'>
            {resCocktail.strInstructions}
          </p>

          <div className='flex justify-between'>
            <div className='w-1/2'>
              <h5 className='mb-1 text-3xl font-semibold'>Glass</h5>
              <p className='text-xl text-white/70'>{resCocktail.strGlass}</p>
            </div>

            <div className='w-1/2 text-start'>
              <h5 className='mb-1 text-3xl font-semibold '>Tags</h5>
              <p className='flex flex-row flex-wrap gap-1 text-xl text-white/70'>
                {resCocktail.strTags?.split(',').map((drink, index, array) => {
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
