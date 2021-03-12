import React from 'react'

const GodFilter = (props) => {
  console.log('GodFilterProps',props.godListData.persons)
  const handleFilter = (event) => {
    props.onChange(event.target.value.toLowerCase())
  }

  const clearField = () =>{
    document.getElementById('input-field').value = ''
  }
  const gods = props.godListData.persons
  console.log('TEST -> person' , gods)


  return (
    <div className='filter-container'>
      <fieldset>
        <legend> Search here </legend>
        <label>Choose a region from the drop down or search by <b>full</b> country name </label>
        <input id='input-field'  list='god-list-dropdown' onChange={handleFilter} />
        <datalist id='god-list-dropdown'>
          {gods.map((god)=>{
            return <option key={god.personID} value={god.name} /> 
          })}             
        </datalist>
        <button id='clear-btn' onClick={clearField}>Clear Field </button>
      </fieldset>
    </div>
  )
}

export default GodFilter 