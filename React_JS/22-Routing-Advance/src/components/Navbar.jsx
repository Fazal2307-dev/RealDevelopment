import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <h3>YouTube</h3>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/courses'>Courses</Link>
        <Link to='/dsasheet'>DSASheet</Link>
          <Link to='/playground'>Playground</Link>
          <Link to='/read'>Read</Link> 
      </div>
    </div>
  )
}

export default Navbar
