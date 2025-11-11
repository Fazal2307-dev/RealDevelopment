import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Homes from './pages/Homes'
import Content from './pages/Content'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homes />}/>
        <Route path='/content' element={<Content />} />
      </Routes>
    </div>
  )
}

export default App
