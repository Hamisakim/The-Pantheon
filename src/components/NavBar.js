// eslint-disable-next-line no-unused-vars
import React, { useEffect  } from 'react'

// eslint-disable-next-line no-unused-vars
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  

  // const getRandomNumber = () => {
  //   return parseint(Math.random()*data.length)
  // }

  // const location = useLocation()
  // useEffect(() => {
  //   // re-render Navbar when url changes
  // }, [location.pathname])
  // console.log('TEST -> location.pathname', location.pathname)

  // const onRandom = () => {
  //   if( location.pathname === '/random'){
  //     console.log('we are random')

  //   }

  // }



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



        <div className='navbar-start'>
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
