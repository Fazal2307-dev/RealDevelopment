import React from 'react'
import { useState } from 'react'

const App = () => {
  const[num,setNum]=useState({
    Name:"Fazal",
    age:25,
  })
  const btnClicked= ()=>{
     const newNum = {...num}
     newNum.Name = "Afzal";
     setNum(newNum);
  }
  return (
    <div>
      <h1>value is {num.Name}</h1>
      <button onClick={btnClicked}>Click me </button>
    </div>
  )
}

export default App
