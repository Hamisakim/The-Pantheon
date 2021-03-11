import axios from 'axios'
import React, { useState, useEffect } from 'react'

const GodsList = () => {
  const [godListData, setGodListData] = useState(null)

  // console.log('🚀 ~ file: FamilyTree.js ~ line 6 ~ FamilyTree ~ godData, setGodData', godData, setGodData)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        'https://api.allorigins.win/raw?url=https://anfi.tk/greekApi/person/getall'
      )
      // console.log(response[0])
      setGodListData(data)
    }
  
    getData()
  }, [])
  if (!godListData) return null
  return (
    <>
      {console.log('gods person=>', godListData.persons)}

      <ul>
        {godListData.persons.map(god => {
          return <li key={god.personID}> {god.name}</li>
        })}
      </ul>
      
    </>
  )
}

export default GodsList
