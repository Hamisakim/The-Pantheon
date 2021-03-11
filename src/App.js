import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FamilyTree from './components/FamilyTree'

import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import GodsList from './components/GodsList'
import RandomGod from './components/RandomGod'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          
          <Route  exact path='/'>
            <HomePage />
          </Route>

          <Route path='/gods-list'>
            <GodsList />
          </Route>

          <Route path='/family-tree/:selectedName'>
            <FamilyTree />
          </Route>

          <Route path= '/random'>
            <RandomGod />
          </ Route>
          
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
