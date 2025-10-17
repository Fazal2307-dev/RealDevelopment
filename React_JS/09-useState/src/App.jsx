import React from 'react'
import { useState } from 'react'

const App = () => {
 
  const [a,setA] = useState(0);
  const chnage = ()=>{
    setA()
  }
  return (
    <div >
      <h1>change value is {a}</h1>
      <button onClick={chnage} className='bg-amber-500'>value</button>
    </div>
  )
}

export default App
