'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const ButtonBack = () => {
  const router = useRouter()
  return (
    <button
      className='flex mx-auto text-xl border-slate-500 border rounded-md px-4 py-2 hover:border-slate-300 transition-all mb-10'
      onClick={() => router.back()}
    >
      Back
    </button>
  )
}

export default ButtonBack
