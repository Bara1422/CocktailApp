import React from 'react'

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children, ...props }) => {
  return (
    <main className='w-full bg-slate-900 px-4 py-20 container max-w-6xl mx-auto'>
      {children}
    </main>
  )
}

export default Container
