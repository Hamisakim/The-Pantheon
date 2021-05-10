# The Pantheon ReadMe
### Team members
*  [Sami Hakim](https://github.com/hamisakim) 
*  [Jesse Edwards](https://github.com/JedwardsK) 

# Deployed app here    [The Pantheon](https://thepantheon.netlify.app/) 
# Project Overview - 48 hours
This app provides a family tree of your selected Greek God, King or Hero. Choose from over 200 Entries and view lineages spanning three generations
<img width="1423" alt="Screenshot 2021-05-07 at 14 19 11" src="https://user-images.githubusercontent.com/76621344/117462809-ec2ee580-af46-11eb-87d2-46876b4a199e.png">


# Initialisation
1. `yarn`
2. `yarn start`

# Project brief
Build a front-end application consuming an external API.

# Approach Taken
We began by brainstorming ideas for cool projects to do and eventually we found this [greekmyths · Apiary](https://greekmythology1.docs.apiary.io/) However it was not working but we were set on the idea around Greek Mythology.  We found another partly completed API which we figured we’d be able to use and get the most out of, given the short time frame [GitHub - newsh/GreekAPI: Web API for Greek Mythology data](https://github.com/newsh/GreekAPI)
After finding this we began working! 

We worked on our routes, and getting the right data visualising this through Insomnia.
# My highlights
I worked on the list page: 
<img width="1421" alt="Screenshot 2021-05-07 at 14 38 33" src="https://user-images.githubusercontent.com/76621344/117462822-efc26c80-af46-11eb-8d8a-f66c4027641a.png">


For the filter - This was a separate component. 
That received the list of Gods from the API as props, and the user input to actively filter through the field sets dropdown data!
`<GodFilter godListData={godListData} userInput={userInput} onChange={handleFilter} />`

<img width="1440" alt="Screenshot 2021-05-07 at 14 39 18" src="https://user-images.githubusercontent.com/76621344/117462839-f3ee8a00-af46-11eb-8d0a-50a7d0031207.png">

``` javascript
import React from 'react'
const GodFilter = (props) => {
  const handleFilter = (event) => {
    props.onChange(event.target.value.toLowerCase())
  }
  const clearField = () =>{
    document.getElementById('input-field').value = ''
  }
  const gods = props.godListData.persons
  return (
    <div className='filter-container'>
      <fieldset>
        <legend> Search here </legend>
        <label>Choose a God from the drop down or search by name </label>
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
```



# Wins and challenges 
### Challenges! 
We ran into a few! 
* Styling the family tree to work with complicated relationships. 
* Due to the way the data was nested the spousal status of the God also caused issues! We had to write two functions to render the correct	name of spouse and to render if it was a husband or wife! 

``` javascript
{
  "personID": 66,
  "name": "Ares",
  "father": {
    "personID": 1,
    "name": "Zeus"
  },
  "mother": {
    "personID": 67,
    "name": "Hera"
  },
  "wife": [
    {
      "personID": 65,
      "name": "Aphrodite"
    }
  ],
...}

```

``` javascript
 const {wife, husband } = godData
	
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
```
### Wins
* Getting a cool working app deployed with the unsurprisingly scarce amount of mythological Greek APIs out there ! 
* Getting a working family-tree styling wise! 

# Key Learnings 
This was the first real pair-coded project. We had to use zoom and slack to communicate. We used VSCode and LiveShare to work together

Great to work with and solve problems together, but also a lesson on how to work separately on the same project. 

# Walkthrough 
Users can go to the All Gods Section from the navbar

<img width="1440" alt="Screenshot 2021-05-07 at 15 17 32" src="https://user-images.githubusercontent.com/76621344/117463233-59427b00-af47-11eb-92ca-a93ef305deb1.png">
From here they can either search or choose from the drop down, or browse them all!

<img width="1440" alt="Screenshot 2021-05-07 at 15 18 14" src="https://user-images.githubusercontent.com/76621344/117463344-7414ef80-af47-11eb-8ae8-43584b286eaa.png">



After selecting they will be taken to the Family Tree. From here users can choose any family members to be taken to their family tree
<img width="1440" alt="Screenshot 2021-05-07 at 15 19 58" src="https://user-images.githubusercontent.com/76621344/117463544-b4746d80-af47-11eb-88fc-f0c8b2466b0f.png">
