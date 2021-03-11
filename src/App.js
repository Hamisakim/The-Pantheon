import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FamilyTree from './components/FamilyTree'
import HomePage from './components/HomePage'
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/home'>
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
