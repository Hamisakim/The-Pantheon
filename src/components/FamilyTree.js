/* eslint-disable indent */

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
//!!!!! SAMI OG 


const FamilyTree = () => {
  const [godData, setGodData] = useState(null)

  const { selectedName } = useParams()

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        // 'https://cors-anywhere.herokuapp.com/https://anfi.tk/greekApi/person/en/Cronos'
        `https://api.allorigins.win/raw?url=https://anfi.tk/greekApi/person/en/${selectedName}`
      )
      setGodData(data)
    }
    getData()
  }, [selectedName])

  if (!godData) return <div className="loading-image">
    <img src="https://i.pinimg.com/originals/f1/96/72/f19672c5028e8b9d49d8b3cbd49be4d7.png" alt="spartan image" />
  </div>

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

  const haveWife = () => { 
    let spouseName = ''
    if (!husband && !wife){
      spouseName = ''
     // html = null
    } else if (!husband){
      spouseName = wife[0].name
    } else if (!wife) {
      spouseName = husband[0].name
    }
  return spouseName 
      }

  const spouseTag = () => { 
   let gender = ''
    if (!husband && !wife){
      gender = ''
    } else if (!husband){
      gender = 'wife'
    } else if (!wife) {
        gender = 'husband'
    }
  return gender
    }


  return (
    <>
      <div className='all-gods-container'>
        
        <div className='top-container parents-row god-row'>
          {!mother ? '' : 
            <Link to={`/family-tree/${mother.name}`} >
              <div className='mother-container single-fam'> 
                <p>  {mother.name}   </p>
                <p className='relation-tag'>mother</p>
                <div className='v-line'></div>
              </div>
            </Link>
          }
      
          {!father ? '' :
            <Link to={`/family-tree/${father.name}`} >
              <div className='father-container single-fam'> 
                <p>  {father.name}   </p>
                <p className='relation-tag'>father</p>
                <div className='v-line'></div>
              </div> 
            </Link>
          }
      
      
        </div> {/* parents container */}
    
        <div className='sibling-row god-row '> {/*sibling-row row, contains siblings and main god */} 
        
          <div className='brother-container sibling-container'> {/* Contains just brothers*/}  
            {!brother ? '' :
              brother.map((brother) => {
                return (
                  <Link key={brother.personID}to={`/family-tree/${brother.name}`}> 
                    <div className='single-fam'>
                      <div className='v-line'></div>
                      <p>   {brother.name}   </p>
                      <p className='relation-tag'>brother</p>
                    </div>
                  </Link>
                )
              })}
          </div>


                
          <div className='sister-container sibling-container'>   {/* contains just sisters */ }
            {!sister ? '' : 
              sister.map((sister) => {
                return (
                  <Link key={sister.personID}to={`/family-tree/${sister.name}`}> 
                    <div className='single-fam'>
                      <div className='v-line'></div>
                      {sister.name}   
                      <p className='relation-tag'>sister</p>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div> {/* sibling-row row closing tag */}

        <div className='main-row god-row'>
          <div className='main-god single-fam'> 



            <p className='main-name'>{name}</p>

            <img src='https://static.thenounproject.com/png/1764444-200.png' />
          </div>  {/* Main god focus */}
        </div>

        <div className='spouse-row god-row'>
          <div className='spouse single-fam'> 
          
            <Link to={`/family-tree/${haveWife()}`}> 
              {haveWife()}
            <p className='relation-tag'>{spouseTag()}</p>
            </Link>
              


          </div>
        </div> { /* spouse row */}

        <div className='children-row god-row'>
          <div className='daughter-container child-container'> {/* just daughters */ }
            {!daughter ? '' :
              daughter.map((daughter) => {
                return (

                  <Link key={daughter.personID}to={`/family-tree/${daughter.name}`}> 
                    <div className='single-fam'>
                      <div className='v-line'></div>
                      <p> {daughter.name}   </p>
                      <p className='relation-tag'>daughter</p>
                    </div>
                  </Link>
                )
              })}
          </div>

          <div className='son-container child-container'>   {/* contains just son */ }
            {!son  ? '' : 
              son.map((son) => {
                return (
                  <Link key={son.personID}to={`/family-tree/${son.name}`}> 
                    <div className='single-fam'>
                      <div className='v-line'></div>
                      <p>{son.name} </p>
                      <p className='relation-tag'>son</p>
                    </div>
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
