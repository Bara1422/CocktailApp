'use client'

import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect
} from 'react'

import { Drinks } from './CocktailByCategory'
import { Input } from './ui/Input'

interface SearchFilterProps {
  data: Drinks[]
  setDrinksFilter: Dispatch<SetStateAction<Drinks[]>>
  setValue: Dispatch<SetStateAction<string>>
  value: string
  selected: string
}

const SearchFilter: FC<SearchFilterProps> = ({
  data,
  setDrinksFilter,
  setValue,
  selected,
  value
}: SearchFilterProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    filterArray(e.target.value)
  }

  const filterArray = useCallback(
    (input: string) => {
      const lowerInput = input.toLowerCase()
      const filtered = data.filter((item) =>
        item.strDrink.toLowerCase().includes(lowerInput)
      )
      setDrinksFilter(filtered)
    },
    [data, setDrinksFilter]
  )
  useEffect(() => {
    filterArray(value)
  }, [selected, value, filterArray])

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
