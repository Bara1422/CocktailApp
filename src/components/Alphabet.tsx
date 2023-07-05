import { getAlphabetLetters } from '@/lib/getAlphabetLetters'
import Link from 'next/link'
import { FC } from 'react'

interface AlphabetProps {}

const Alphabet: FC<AlphabetProps> = ({}) => {
  const { alphabet } = getAlphabetLetters()

  return (
    <div className='flex flex-col justify-center gap-4'>
      <h4 className='text-center text-3xl'>Search by letter</h4>
      <div className='flex sm:gap-1 justify-center pb-4 container mx-auto flex-wrap px-4 max-w-6xl '>
        {alphabet.map((letter, index) => (
          <>
            <Link
              key={letter}
              href={`/cocktails/letter/${letter}`}
              className=' px-1.5 md:border-2 rounded-md border-transparent hover:border-slate-200 flex bg-transparent dark:bg-transparent  text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent'
            >
              {letter}
            </Link>

            <span>{index !== alphabet.length - 1 && '-'}</span>
          </>
        ))}
      </div>
    </div>
  )
}

export default Alphabet
