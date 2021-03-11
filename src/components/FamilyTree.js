import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FamilyTree = () => {
  const [godData, setGodData] = useState(null)

  // console.log('🚀 ~ file: FamilyTree.js ~ line 6 ~ FamilyTree ~ godData, setGodData', godData, setGodData)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        // 'https://cors-anywhere.herokuapp.com/https://anfi.tk/greekApi/person/en/Cronos'
        // 'https://cors-proxy.htmldriven.com/?url=https://anfi.tk/greekApi/person/en/Cronos'
        'https://api.allorigins.win/raw?url=https://anfi.tk/greekApi/person/en/Cronos'
      )
      //console.log(response[0])
      setGodData(data)
    }
    getData()
  }, [])



  if (!godData ) return null 
  // const { wife } = godData
  // const wife2 = wife[0]
  // console.log('TEST -> wife2', wife
 
  return (
    <>
      {console.log('TEST -> godData', godData)}
      {/* {console.log('TEST -> SPOUSE', wife2 )} */}


      {/* {console.log('TEST -> godData.mother', godData.mother)} */}

      <h1> test</h1>
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
            {/* {godData.brother.map((sibling) => {
              return <div key={sibling.name}>{sibling.name}</div>
            })} */}
          </div>

          <div className='h-line'>
            <hr />
          </div>

          <div className='main '>{godData.name}</div>

          <div className='h-line'>
            <hr />
          </div>

          <div className='sisters '>
            {/* {godData.sister.map((sibling, index) => {
              return <div>{sibling[index].name}</div>
            })} */}
          </div>
        </div>

        <div className='spouse-container'>
          <div className='spouse'>{ godData.wife[0].name }</div>
        </div>

        <div className='children container'>
          <div>
            {/* {godData.daughter.map((child, index) => {
              return <div>{child[index].name}</div>
            })} */}
          </div>
          <div>
            {/* {godData.son.map((child, index) => {
              return <div>{child[index].name}</div>
            })} */}
          </div>
        </div>
      </main>
    </>
  )
}

export default FamilyTree
