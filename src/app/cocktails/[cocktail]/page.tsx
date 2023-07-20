/* eslint-disable @next/next/no-img-element */
import { Cocktail } from '@/components/DailyCocktail'
import { getCocktailByName } from '@/lib/getCocktailByName'
import Link from 'next/link'

interface CocktailProps {
  params: {
    cocktail: string
  }
}

const CocktailPage = async ({ params: { cocktail } }: CocktailProps) => {
  const cocktailDataFetch = getCocktailByName(cocktail)
  const drinks = await cocktailDataFetch

  return (
    <div className='flex flex-col items-center w-2/3 p-4 py-24 mx-auto'>
      <h2 className='pb-20 text-5xl'>Cocktails found:</h2>
      <ul className='md:gap-10 gap-5 grid grid-cols-[repeat(auto-fill,200px)] md:justify-between justify-around w-full'>
        {drinks &&
          drinks.map((drink: Cocktail) => {
            const drinkNameWithHyphens = drink.strDrink.replace(/ /g, '-')
            return (
              <div key={drink.idDrink}>
                <Link
                  href={`/drinks/${drink.idDrink}-${drinkNameWithHyphens}`}
                  className='flex flex-col w-[200px] text-slate-400 hover:text-slate-100'
                >
                  <img
                    width={200}
                    height={200}
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    className='rounded-md'
                  />
                  <h5 className='pt-1 text-center '>{drink.strDrink}</h5>
                </Link>
              </div>
            )
          })}
      </ul>
    </div>
  )
}

export default CocktailPage
