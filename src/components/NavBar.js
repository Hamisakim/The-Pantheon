// eslint-disable-next-line no-unused-vars
import React, { useEffect  } from 'react'

// eslint-disable-next-line no-unused-vars
import { Link, useLocation } from 'react-router-dom'
import { getRandomNumber } from './helpers/helpers'
const Navbar = () => {
  



  
  return (
    <nav className='navbar is-dark'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link to='/'>
            <span role='img' aria-label='logo' className='title'>
            🔱
            </span>
          </Link>
        </div>
        < div className='navbar-start'>
          <Link to='/gods-list' className='navbar-item'>
            Gods
          </Link>
        </div> 



        <div className='navbar-start' onClick={getRandomNumber()}>
          <Link to='/random'
            className='navbar-item'>
            Random
          </Link>
        </div>

      </div>
    </nav>
  )
}
export default Navbar
