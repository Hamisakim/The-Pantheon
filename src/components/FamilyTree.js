import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FamilyTree = () => {
  const [godData, setGodData] = useState([])
  console.log('TEST -> godData', godData)
  // console.log('🚀 ~ file: FamilyTree.js ~ line 6 ~ FamilyTree ~ godData, setGodData', godData, setGodData)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        'https://cors-anywhere.herokuapp.com/https://anfi.tk/greekApi/person/en/Hades'
      )
      console.log(response[0])
      setGodData(response)
    }
    getData()
  }, [])

  return (
    <>
      {console.log('i am a test')}
      <h1> test</h1>
      <div className='family-tree-container'>
        <div className='main-container'></div>
      </div>

    </>
  )
}

export default FamilyTree
