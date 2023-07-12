'use client'

import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

import { Drinks } from './CocktailByCategory'
import { Input } from './ui/Input'

interface SearchFilterProps {
  data: Drinks[]
  setDrinksFilter: Dispatch<SetStateAction<Drinks[]>>
  setValue: Dispatch<SetStateAction<string>>
  value: string
}

const SearchFilter: FC<SearchFilterProps> = ({
  data,
  setDrinksFilter,
  setValue,
  value
}: SearchFilterProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    filterArray(e.target.value)
  }

  const filterArray = (input: string) => {
    const lowerInput = input.toLowerCase()
    const filtered = data.filter((item) =>
      item.strDrink.toLowerCase().includes(lowerInput)
    )
    setDrinksFilter(filtered)
  }

  return (
    <div>
      <Input
        className='bg-slate-50'
        type='text'
        value={value}
        onChange={handleInputChange}
        placeholder='Filter cocktail...'
      />
    </div>
  )
}

export default SearchFilter
