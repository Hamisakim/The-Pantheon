import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {


  const location = useLocation()
  useEffect(() => {
    // re-render Navbar when url changes
  }, [location.pathname])

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
      </div>
    </nav>
  )
}
export default Navbar
