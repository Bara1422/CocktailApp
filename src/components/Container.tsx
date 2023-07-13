import React from 'react'

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children, ...props }) => {
  return (
    <main className='container w-full px-4 py-20 mx-auto bg-slate-900 max-w-7xl'>
      {children}
    </main>
  )
}

export default Container
