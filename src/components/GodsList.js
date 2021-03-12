/* eslint-disable no-undef */
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const GodsList = () => {
  // const [userInput, setUserInput] = useState('')
  const [godListData, setGodListData] = useState(null)
  

  // const handleFilter = (newUserInput) => {

  //   setUserInput(newUserInput)
  // }
  // console.log('🚀 ~ file: GodsList.js ~ line 14 ~ handleFilter ~ handleFilter', handleFilter)

  // useEffect(() => {
  //   const filteredArray = flagsArray.filter((country) => {
  //     return (
  //       country.region.toLowerCase() === userInput ||
  //       country.name.toLowerCase() === userInput
  //     )
  //   })
  //   //console.log('filteredArray', filteredArray)
  //   setFilteredCountries(filteredArray)
  // }, [userInput, flagsArray])
  // console.log('TEST -> userInput, flagsArray', userInput, flagsArray)




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

      <ul id="slider">
        {godListData.persons.map(god => {
          return (
            <Link key={god.name}to={`/family-tree/${god.name}`}>
              <li className='single-fam god-list' key={god.personID}> {god.name}</li> 
            </Link>
          )
        })}
      </ul>
      
    </>
  )
}

export default GodsList
