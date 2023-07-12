'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export const useInViewLogic = (handleMoreDrinks: () => void) => {
  const { inView, ref } = useInView()

  useEffect(() => {
    if (inView) {
      handleMoreDrinks()
    }
  }, [inView, handleMoreDrinks])
  return { ref }
}
