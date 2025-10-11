import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='fazal' age={25}/>
      <Card user='afzal' age={18}/>
      <Card user='aman' age={25}/>

     
    </div>
  )
}

export default App
