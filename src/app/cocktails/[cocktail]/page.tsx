import { Cocktail } from '@/components/DailyCocktail'
import { getCocktailByName } from '@/lib/getCocktailByName'
import Image from 'next/image'
import Link from 'next/link'

interface CocktailProps {
  params: {
    cocktail: string
  }
}

const CocktailPage = async ({ params: { cocktail } }: CocktailProps) => {
  console.log(cocktail)
  const cocktailDataFetch = getCocktailByName(cocktail)
  const { drinks } = await cocktailDataFetch
  console.log(drinks)
  return (
    <div className='flex flex-col items-center py-24  w-2/3 mx-auto p-4'>
      <h2 className='text-5xl pb-20'>Cocktails found:</h2>
      <ul className='flex flex-wrap gap-20 justify-center'>
        {drinks &&
          drinks.map((drink: Cocktail) => {
            const drinkNameWithHyphens = drink.strDrink.replace(/ /g, '-')
            return (
              <div key={drink.idDrink}>
                <Link
                  href={`/drinks/${drink.idDrink}-${drinkNameWithHyphens}`}
                  className='flex flex-col w-[200px] text-slate-400 hover:text-slate-100'
                >
                  <Image
                    width={200}
                    height={200}
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    className='rounded-md'
                  />
                  <h5 className=' text-center pt-1'>{drink.strDrink}</h5>
                </Link>
              </div>
            )
          })}
      </ul>
    </div>
  )
}

export default CocktailPage
