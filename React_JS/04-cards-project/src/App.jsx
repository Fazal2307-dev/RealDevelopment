import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
          <img src="https://imgs.search.brave.com/nKz_jFlZWYDvJs7oFiBzJECedcrSHw9cOGwsTgYKZXg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/MS8xMC9hbWF6b24t/bG9nby1ibGFjay1h/bmQteWVsbG93LXZl/Y3Rvci00Njg2MDEx/MC5qcGc" alt="" />
          <button>save <Bookmark /> </button>
        </div>
        <div className="center">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX designer</h2>
            <div>
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
            </div>
        </div>
        <div className="bottom">
          <div>
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai,India</p>
            </div>
              <button>Apply now</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
