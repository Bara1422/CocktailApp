import React, { useEffect } from 'react'

const useGetDrinksFilter = (value: string) => {
  useEffect(() => {
    const data = async (value: string) => {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`
      )
      const resJson = await res.json()

      return resJson
    }

    data(value)
  }, [value])
}

export default useGetDrinksFilter
