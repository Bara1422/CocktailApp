'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const ButtonBack = () => {
  const router = useRouter()
  return (
    <button
      className='flex place-self-end mr-4  max-w-[80px] text-xl border-slate-500 border rounded-md px-4 py-2 hover:border-slate-300 transition-all'
      onClick={() => router.back()}
    >
      Back
    </button>
  )
}

export default ButtonBack
