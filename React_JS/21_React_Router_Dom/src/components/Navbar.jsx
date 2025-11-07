import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <Link to='/'><h3>Sheryians</h3></Link>
       
        
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to ='/products'>Products</Link>
        </div>
      
    </div>
  )
}

export default Navbar
