import React, {useEffect } from 'react'
import { useState } from 'react'


const App = () => {

const [a, setA] = useState(0)
const [b, setB] = useState(0)

  function aChanging(){
    console.log('A value is chnage ');
  }
  function bChanging(){
    console.log('B value is chnage ');
  }
  useEffect(function(){
    aChanging(),
    bChanging()
  },[a])
  return (
    <div>
      <h3>value of {a}{}</h3>
      <h3>value of {b}</h3>
      <button onClick={()=>{setA(a+1)}}>A</button>
      <button onClick={()=>{setB(b+1)}}>B</button>
    </div>
  )
}

export default App
