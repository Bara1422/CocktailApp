/* eslint-disable @next/next/no-img-element */
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
    <main className='container w-full px-4 pt-20 mx-auto bg-slate-900 max-w-7xl'>
      <div className='flex flex-col justify-between gap-4 py-4 border-b md:px-4 md:flex-row'>
        <div className='border-b md:border-none '>
          <h2 className='mb-8 text-5xl text-center'>{ingredientName}</h2>
          <img
            src={`https://www.thecocktaildb.com/images/ingredients/${ingretientForImageUrl}.png`}
            alt={`${ingredient}`}
            width={400}
            height={400}
            className='rounded-lg shadow-md mx-auto max-h-[400px] my-auto'
          />
        </div>

        <div className='flex flex-col self-end gap-6 md:w-2/3 '>
          <h3 className='mx-auto mb-1 text-5xl font-semibold '>Cocktails</h3>
          <ul className='flex flex-wrap justify-center gap-8 pb-3 mb-3'>
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
                    <img
                      width={200}
                      height={200}
                      src={ingredient.strDrinkThumb}
                      alt={ingredient.strDrink}
                      className='rounded-md'
                    />
                    <h5 className='pt-1 text-center '>{ingredient.strDrink}</h5>
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
