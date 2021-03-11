import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RandomGod = () => {
  const [randomGod, setRandomGod] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        'https://api.allorigins.win/raw?url=https://anfi.tk/greekApi/person/random'
      )
      // console.log(response[0])
      setRandomGod(data)
    }
    getData()
  }, [])

  if (!randomGod) return null

  return (
    <>{console.log(randomGod.name)}</>
  )
}

export default RandomGod