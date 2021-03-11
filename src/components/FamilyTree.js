import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const FamilyTree = () => {
  const [godData, setGodData] = useState(null)

  const params = useParams()
  console.log('TEST -> params', params)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        // 'https://cors-anywhere.herokuapp.com/https://anfi.tk/greekApi/person/en/Cronos'

        'https://api.allorigins.win/raw?url=https://anfi.tk/greekApi/person/en/Rhea'
      )

      setGodData(data)
    }
    getData()
  }, [])

  if (!godData) return null

  const isThereHusband = () => {
    console.log('HusbandData', godData)
    if (!godData.husband && (godData.wife === true)) {
      console.log(godData.wife[0].name)
      return godData.wife[0].name
    } else if (!godData.wife && (godData.husband === true)) {
      console.log(godData.husband[0].name)
      return godData.husband[0].name
    } else {
      console.log('no data')
      return ''
    }
  }

  return (
    <>
      {console.log('TEST -> godData', godData)}

      <div className='family-tree-container'>
        <div className='main-container'></div>
      </div>

      <main>
        <div className='parent container'>
          <div>{godData.mother.name}</div>
          <div>{godData.father.name}</div>
        </div>

        <div className='container'>
          <div className='brothers '>
            {!godData.brother
              ? ''
              : godData.brother.map((sibling) => {
                return <div key={sibling.personID}>{sibling.name}</div>
              })}
          </div>

          <div className='h-line'>
            <hr />
          </div>

          <div className='main '>{godData.name}</div>

          <div className='h-line'>
            <hr />
          </div>

          <div className='sisters '>
            {!godData.sister
              ? ''
              : godData.sister.map((sibling) => {
                return <div key={sibling.personID}>{sibling.name}</div>
              })}
          </div>

          <div className='spouse-container'>
            <div className='spouse'>
              {
                <div>{isThereHusband()}</div>
                
              }
            </div>
          </div>

          <div className='children container'>
            <div>
              {!godData.daughter
                ? ''
                : godData.daughter.map((child) => {
                  return <div key={child.personID}>{child.name}</div>
                })}
            </div>

            <div>
              {!godData.son
                ? ''
                : godData.son.map((child) => {
                  return <div key={child.personID}>{child.name}</div>
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default FamilyTree
