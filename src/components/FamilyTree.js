/* eslint-disable indent */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
//!!!!! SAMI OG 
const FamilyTree = () => {
  const [godData, setGodData] = useState(null)

  // eslint-disable-next-line no-unused-vars
  const params = useParams()
 

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        // 'https://cors-anywhere.herokuapp.com/https://anfi.tk/greekApi/person/en/Cronos'
        'https://api.allorigins.win/raw?url=https://anfi.tk/greekApi/person/en/Cronos'
      )
      setGodData(data)
    }
    getData()
  }, [])


  if (!godData) return null
  // eslint-disable-next-line no-unused-vars
  const {
    name,
    mother,
    // eslint-disable-next-line no-unused-vars
    father,
    // eslint-disable-next-line no-unused-vars
    daughter,
    // eslint-disable-next-line no-unused-vars
    brother,
    // eslint-disable-next-line no-unused-vars
    sister,
    // eslint-disable-next-line no-unused-vars
    son,
    // eslint-disable-next-line no-unused-vars
    wife,
    // eslint-disable-next-line no-unused-vars
    husband,
    // eslint-disable-next-line no-unused-vars
  } = godData

// eslint-disable-next-line no-unused-vars
const haveWife = () => { 
let spouseName = ''
if (!husband && !wife){
  spouseName = ''
} else if (!husband){
  spouseName = wife[0].name
} else if (!wife) {
  spouseName = husband[0].name
}
return spouseName
}


  return (
    <>
      <div className='all-gods-container'>
        <div className='top-container parents-row god-row'>
          <div className='mother-container'> {mother.name} </div>
          <div className='father-container'> {father.name} </div>
        </div> {/* parents container */}

        <div className='middle-container god-row '> {/*Middle row, contains siblings and main god */} 
         
          <div className='brother-container'> {/* Contains just brothers*/}  
            {brother.map((brother) => {
              return (
                <Link key={brother.personID}to={`/family-tree/${brother.name}`}> 
                  <div className='single-fam'>{brother.name} </div>
                </Link>
              )
            })}
          </div>
       
          <div className='main-god'> {name} </div>  {/* Main god focus */}
                
          <div className='sister-container'>   {/* contains just sisters */ }
            {sister.map((sister) => {
              return (
                <Link key={sister.personID}to={`/family-tree/${sister.name}`}> 
                  <div className='single-fam'>{sister.name} </div>
                </Link>
              )
            })}
          </div>
        </div> {/* middle row closing tag */}


        <div className='spouse-row god-row'>
          <div className='spouse'> 
            {haveWife()
            }  

          </div>
        </div>

      </div> {/* all gods container */}
    </>
  )
}
export default FamilyTree
