import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FamilyTree from './components/FamilyTree'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          
          <Route  exact path='/'>
            <HomePage />
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
