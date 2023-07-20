import Link from 'next/link'
import React from 'react'

interface Props {
  title: string
  page: string
  text: string
}

const WantSection = ({ title, page, text }: Props) => {
  return (
    <div className='flex flex-col max-w-sm p-6 border border-gray-700 rounded-lg shadow bg-slate-800'>
      <div className='flex-grow'>
        <h4 className='mb-2 text-2xl font-bold tracking-tight text-white/90 '>
          {title}
        </h4>

        <p className='mb-3 font-normal text-gray-400'>{text}</p>
      </div>
      <Link
        href={`/${page}`}
        className='flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center text-white rounded-lg md:inline-flex md:w-auto bg-slate-700 focus:ring-4 focus:outline-none hover:bg-slate-600 focus:ring-slate-500'
      >
        Go to {page.toUpperCase()}
        <svg
          className='w-3.5 h-3.5 ml-2'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 10'
        >
          <path
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M1 5h12m0 0L9 1m4 4L9 9'
          />
        </svg>
      </Link>
    </div>
  )
}

export default WantSection
