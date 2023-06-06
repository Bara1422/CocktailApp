import { Github } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className='absolute bottom-0 py-4 flex justify-center w-full'>
      <div>
        <Link href=''></Link>
        <Github />
      </div>
    </footer>
  )
}

export default Footer
