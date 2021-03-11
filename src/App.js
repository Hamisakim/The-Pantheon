import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FamilyTree from './components/FamilyTree'

import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import GodsList from './components/GodsList'
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

          <Route path='/family-tree/:id'>
          </Route>

          <Route path='/family-tree'>
            <FamilyTree />
          </Route>




        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
