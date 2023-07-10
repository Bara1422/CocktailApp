'use client'

import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

import { Input } from './ui/Input'
import Ingredients from '@/app/ingredients/page'

interface IngredientsFilter {
  data: Ingredients[]
  setIngredientFilter: Dispatch<SetStateAction<Ingredients[]>>
  setValue: Dispatch<SetStateAction<string>>
  value: string
}

const IngredientsFilter: FC<IngredientsFilter> = ({
  data,
  setIngredientFilter,
  setValue,
  value
}: IngredientsFilter) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    filterArray(e.target.value)
  }

  const filterArray = (input: string) => {
    const filtered = data.filter((item) => item.strIngredient1.includes(input))
    setIngredientFilter(filtered)
  }

  return (
    <div className='flex md:justify-end justify-center pt-4 '>
      <Input
        className='bg-slate-50'
        type='text'
        value={value}
        onChange={handleInputChange}
        placeholder='Filter ingredient...'
      />
    </div>
  )
}

export default IngredientsFilter
