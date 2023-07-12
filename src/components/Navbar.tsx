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
    <header className='bg-slate-900 text-white w-full container max-w-7xl mx-auto flex justify-between py-4 items-center fixed top-0 right-0 left-0 px-4 border-b border-slate-700 z-50'>
      <Link
        href='/'
        className='text-white flex text-3xl md:px-0 '
        onClick={() => nav && toggleMenu()}
      >
        CocktailApp
      </Link>
      <nav aria-label='desktop-menu'>
        <ul className='md:flex hidden gap-10 '>
          <li className='hover:underline underline-offset-2'>
            <Link href='/' prefetch={false}>
              Home
            </Link>
          </li>
          <li className='hover:underline underline-offset-2'>
            <Link href='/drinks'>Drinks</Link>
          </li>
          <li className='hover:underline underline-offset-2'>
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
            <Link href='/cocktails'>Drinks</Link>
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
