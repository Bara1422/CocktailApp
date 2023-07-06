import Container from '@/components/Container'
import React from 'react'

export default function IngredientLoading() {
  return (
    <Container>
      <ul className='pt-20 flex flex-wrap gap-6 '>
        {Array.from({ length: 20 }).map((_, index) => (
          <li
            className='cursor-pointer text-center hover:border-white border-2 p-4 rounded-lg border-slate-500 transition-all max-w-[300px] w-[200px] h-[230px]'
            key={index}
          >
            <div className='flex flex-col gap-1 pb-3 mb-3 animate-pulse bg-slate-800/60 w-[150px] h-[150px] min-h-[150px] min-w-[150px] mx-auto ' />
          </li>
        ))}
      </ul>
    </Container>
  )
}
