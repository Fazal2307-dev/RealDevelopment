import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Courses from './pages/Courses'
import Home from './pages/Home'
import Read from './pages/Read'
import DSASheet from './pages/DSASheet'
import Playground from './pages/Playground'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/read' element={<Read />} />
        <Route path='/dsasheet' element={<DSASheet/>} />
        <Route path='/playground' element={<Playground />} />
      </Routes>
    </div>
  )
}

export default App
