'use client'

import { FC, FormEvent, useState } from 'react'
import { Input } from './ui/Input'
import { getCocktailByName } from '@/lib/getCocktailByName'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

interface SearchCocktailProps {}

const SearchCocktail: FC<SearchCocktailProps> = ({}) => {
  const router = useRouter()
  const [value, setValue] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push(`/cocktails/${value}`)
  }
  return (
    <form className='flex justify-center pt-20 pb-6' onSubmit={handleSubmit}>
      <div className='flex items-center justify-center w-full gap-1'>
        <Input
          placeholder='Search for a Cocktail...'
          className='max-w-prose'
          id='search'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button aria-label='search'>
          <Search />
        </button>
      </div>

      <label className='sr-only' htmlFor='search'>
        Search for a Cocktail
      </label>
    </form>
  )
}

export default SearchCocktail
