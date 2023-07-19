import { getAlphabetLetters } from '@/lib/getAlphabetLetters'
import Link from 'next/link'
import { FC } from 'react'

interface AlphabetProps {}

const Alphabet: FC<AlphabetProps> = ({}) => {
  const { alphabet } = getAlphabetLetters()

  return (
    <div className='flex flex-col justify-center gap-4'>
      <h4 className='text-3xl text-center'>Search cocktail by letter</h4>
      <div className='container flex flex-wrap items-center justify-center max-w-6xl gap-1.5 px-4 pb-4 mx-auto sm:gap-1 '>
        <div className='grid grid-cols-7 lg:[grid-template-columns:repeat(26,minmax(0,1fr))] gap-1 sm:[grid-template-columns:repeat(13,minmax(0,1fr))]'>
          {alphabet.map((letter, index) => (
            <>
              <Link
                key={letter}
                href={`/cocktails/letter/${letter}`}
                className=' px-1.5 md:border-2  justify-center rounded-md border-transparent text-2xl hover:border-slate-200 flex bg-transparent text-slate-100 hover:bg-transparent '
              >
                {letter}
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Alphabet
