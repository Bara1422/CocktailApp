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
    <main className='w-full bg-slate-900 px-4 text-letters'>
      <h2 className='text-center text-5xl py-4 border-b'>Random Cocktail</h2>
      <div className='flex justify-between md:px-4 border-b py-4 md:flex-row flex-col gap-4'>
        <Image
          src={resCocktail.strDrinkThumb}
          alt='Random cocktail'
          width={400}
          height={400}
          className='rounded-lg shadow-md mx-auto max-h-[400px] my-auto'
        />

        <div className='flex flex-col md:w-1/2 '>
          <h4 className='text-5xl mb-4 text-center font-bold  '>
            {resCocktail.strDrink}
          </h4>
          <h5 className='text-3xl font-semibold mb-1'>Ingredients:</h5>
          <ul className='flex flex-col gap-1 border-b pb-3 mb-3'>
            {ingredients.map((ingredient, index) => (
              <li key={index} className='text-xl text-white/80 leading-7'>
                &bull; {ingredient} - {measures[index]}
              </li>
            ))}
          </ul>

          <h5 className='text-3xl font-semibold mb-1'>Instructions:</h5>
          <p className='border-b pb-3 mb-3 leading-7 text-xl text-white/80'>
            {resCocktail.strInstructions}
          </p>

          <div className='flex justify-between'>
            <div className='w-1/2'>
              <h5 className='text-3xl font-semibold mb-1'>Glass</h5>
              <p className='text-xl text-white/70'>{resCocktail.strGlass}</p>
            </div>

            <div className='text-start w-1/2'>
              <h5 className='text-3xl font-semibold mb-1 '>Tags</h5>
              <p className='flex flex-row flex-wrap gap-1 text-xl text-white/70'>
                {resCocktail.strTags?.split(',').map((drink, index, array) => {
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
