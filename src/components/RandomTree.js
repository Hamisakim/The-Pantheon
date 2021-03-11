
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
//!!!!! SAMI OG 


const FamilyTree = () => {
  const [godData, setGodData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        // 'https://cors-anywhere.herokuapp.com/https://anfi.tk/greekApi/person/en/Cronos'
        'https://api.allorigins.win/raw?url=https://anfi.tk/greekApi/person/random'
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
    father,
    daughter,
    brother,
    sister,
    son,
    wife,
    husband,
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
          {
            !mother ? ''
              : <Link to={`/family-tree/${mother.name}`} ><div className='mother-container single-fam'> {mother.name} </div> </Link>
          }
      
          {
            !father ? ''
              : <Link to={`/family-tree/${father.name}`} ><div className='father-container single-fam'> {father.name} </div> </Link>
          }
      
      
        </div> {/* parents container */}

        <div className='middle-container god-row '> {/*Middle row, contains siblings and main god */} 
        
          <div className='brother-container'> {/* Contains just brothers*/}  
            {!brother 
              ? ''
              : brother.map((brother) => {
                return (
                  <Link key={brother.personID}to={`/family-tree/${brother.name}`}> 
                    <div className='single-fam'>{brother.name} </div>
                  </Link>
                )
              })}
          </div>

          <div className='main-god single-fam'> {name} </div>  {/* Main god focus */}
                
          <div className='sister-container'>   {/* contains just sisters */ }
            {!sister
              ? ''
              : sister.map((sister) => {
                return (
                  <Link key={sister.personID}to={`/family-tree/${sister.name}`}> 
                    <div className='single-fam'>{sister.name} </div>
                  </Link>
                )
              })}
          </div>
        </div> {/* middle row closing tag */}

        <div className='spouse-row god-row'>
          <div className='spouse single-fam'> 
            <Link to={`/family-tree/${haveWife()}`}> 
              {haveWife()}
            </Link>
          </div>
        </div> { /* spouse row */}

        <div className='children-row god-row'>
          <div className='daughter-container child-container'>   {/* contains just daughter */ }
            {!daughter
              ? ''
              : daughter.map((daughter) => {
                return (
                  <Link key={daughter.personID}to={`/family-tree/${daughter.name}`}> 
                    <div className='single-fam'>{daughter.name} </div>
                  </Link>
                )
              })}
          </div>

          <div className='son-container child-container'>   {/* contains just son */ }
            {!son
              ? ''
              : son.map((son) => {
                return (
                  <Link key={son.personID}to={`/family-tree/${son.name}`}> 
                    <div className='single-fam'>{son.name} </div>
                  </Link>
                )
              })}
          </div>


        </div> {/* children bottom  row closing tag */}
        
      </div> {/* all gods container */}
    </>
  )
}
export default FamilyTree
