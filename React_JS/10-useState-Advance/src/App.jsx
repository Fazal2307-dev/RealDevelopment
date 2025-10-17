import React, { useState } from 'react'

const App = () => {
  const [val,setVal]=useState([10,20,35,48,75]);

  const changed=()=>{
   setVal(val.map(nums=>nums+5))

  }

  return (
    <div>
      <h1>value is {val.join(', ')}</h1>
      <button onClick={changed} className='bg-gray-400'>click for chnage </button>
    </div>
  )
}

export default App
