'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { FC, useState } from 'react'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [nav, setNav] = useState<boolean>(false)
  const toggleMenu = () => {
    setNav((nav) => !nav)
  }

  return (
    <header className='container fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-4 py-4 mx-auto text-white border-b bg-slate-900 max-w-7xl border-slate-700'>
      <Link
        href='/'
        className='flex text-3xl text-white md:px-0 '
        onClick={() => nav && toggleMenu()}
      >
        CocktailApp
      </Link>
      <nav aria-label='desktop-menu'>
        <ul className='hidden gap-10 text-xl md:flex '>
          <li className='text-white/80 hover:text-white'>
            <Link href='/' prefetch={false}>
              Home
            </Link>
          </li>
          <li className='text-white/80 hover:text-white'>
            <Link href='/drinks'>Drinks</Link>
          </li>
          <li className='text-white/80 hover:text-white'>
            <Link href='/ingredients'>Ingredients</Link>
          </li>
        </ul>
      </nav>

      <div onClick={toggleMenu} className='block md:hidden md:px-0'>
        {!nav ? <Menu /> : <X />}
      </div>
      <nav
        className={
          nav
            ? 'fixed top-16 w-full min-h-screen bg-slate-900 ease-in-out duration-300 overflow-hidden  right-0 '
            : 'fixed right-[-150%] '
        }
        onClick={toggleMenu}
      >
        <ul className='p-4 mt-10 text-5xl text-center'>
          <li className='py-6 border-b border-slate-500'>
            <Link href='/'>Home</Link>
          </li>
          <li className='py-6 border-b border-slate-500'>
            <Link href='/drinks'>Drinks</Link>
          </li>
          <li className='py-6 '>
            <Link href='/ingredients'>Ingredients</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
