import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const GodListDisplay = ({ userInput, godArray }) => {
  console.log('TEST -> propsInpiut', userInput)
  
  const [filteredGods, setFilteredGods] = useState([])
 
  console.log('THISone',godArray)
 
  useEffect(() => {
    const filteredArray = godArray.persons.filter((god) => {
      return (
        god.name.toLowerCase() === userInput
      )
    })

    setFilteredGods(filteredArray)
  }, [userInput, godArray])

  
  console.log('filtered',filteredGods)
  return (

    <div>
      <ul className='god-list-container'>

        {(userInput !== '' ? filteredGods : godArray.persons ).map(god => {
          return (
            <Link key={god.name}to={`/family-tree/${god.name}`}>
              <li className='single-fam god-list' key={god.personID}> {god.name}</li> 
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default GodListDisplay
