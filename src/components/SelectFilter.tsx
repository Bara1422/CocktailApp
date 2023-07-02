import React, { ChangeEvent, useEffect } from 'react'

export interface Options {
  value: string
  label: string
}

interface Props {
  options: Options[] | undefined
  value: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const SelectFilter = ({ options, value, onChange }: Props) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className='text-white rounded-md bg-slate-900 border border-white p-1'
    >
      {options &&
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  )
}

export default SelectFilter
