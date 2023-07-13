import { Github, Linkedin, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className='relative bottom-0 flex justify-center w-full py-4 border-t min-h-fit border-slate-700'>
      <div className='flex gap-4'>
        <Link href='https://github.com/Bara1422/CocktailApp'>
          <Github className='text-slate-300 hover:text-slate-50' />
        </Link>
        <Link href='https://www.linkedin.com/in/juan-baranovsky/'>
          <Linkedin className='text-slate-300 hover:text-slate-50' />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
