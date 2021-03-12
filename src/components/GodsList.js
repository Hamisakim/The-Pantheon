/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GodFilter from './GodFilter'
import GodListDisplay from './GodListDisplay'

const GodsList = () => {
  const [userInput, setUserInput] = useState('')
  const [godListData, setGodListData] = useState(null)
 
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        'https://api.allorigins.win/raw?url=https://anfi.tk/greekApi/person/getAll'
      )
      setGodListData(data)
    }
    getData()
  }, [])
  
  const handleFilter = (newUserInput) => {
    setUserInput(newUserInput)
  }

  if (!godListData) return null

  return (
    <>
      <button id='show-all-btn' onClick={() => setUserInput('')}> Show All</button>
      <GodFilter godListData={godListData} userInput={userInput} onChange={handleFilter} />
      <GodListDisplay godArray={godListData}userInput={userInput} onChange={handleFilter}/>

      
    </>
  )
}

export default GodsList
