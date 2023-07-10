import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

export interface IngredientProps {
  strDrink: string
  strDrinkThumb: string
  idDrink: string
}

interface Props {
  ingredients: IngredientProps[]
  ingredient: string
}

const IngredientByName = ({ ingredients, ingredient }: Props) => {
  const ingredientName = ingredient.replace(/_/g, ' ')
  const ingretientForImageUrl = ingredient.replace(/_/g, '%20')
  return (
    <main className='w-full bg-slate-900 px-4 pt-20 container max-w-7xl mx-auto'>
      <div className='flex justify-between md:px-4 border-b py-4 md:flex-row flex-col gap-4'>
        <div className='border-b md:border-none '>
          <h2 className='text-center text-5xl mb-8'>{ingredientName}</h2>
          <Image
            src={`https://www.thecocktaildb.com/images/ingredients/${ingretientForImageUrl}.png`}
            alt={`${ingredient}`}
            width={400}
            height={400}
            className='rounded-lg shadow-md mx-auto max-h-[400px] my-auto'
          />
        </div>

        <div className='flex flex-col md:w-2/3 self-end gap-6 '>
          <h5 className=' font-semibold mb-1 mx-auto text-5xl'>Cocktails</h5>
          <ul className='flex flex-wrap  gap-8 pb-3 mb-3 justify-center'>
            {ingredients.map((ingredient) => {
              const drinkNameWithHyphens = ingredient.strDrink.replace(
                / /g,
                '-'
              )
              return (
                <li key={ingredient.idDrink}>
                  <Link
                    href={`/drinks/${ingredient.idDrink}-${drinkNameWithHyphens}`}
                    className='flex flex-col w-[200px] text-slate-400 hover:text-slate-100  hover:scale-105 transition-all'
                  >
                    <Image
                      width={200}
                      height={200}
                      src={ingredient.strDrinkThumb}
                      alt={ingredient.strDrink}
                      className='rounded-md'
                    />
                    <h5 className=' text-center pt-1'>{ingredient.strDrink}</h5>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </main>
  )
}
export default IngredientByName
