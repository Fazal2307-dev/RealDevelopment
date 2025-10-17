import React, { useState } from 'react'

const App = () => {
 const[val,setVal] = useState(0)

 const increaseNum = ()=>{
// console.log("increaseNum");
 setVal(val+1)

 }
 const decreaseNum = ()=>{
  // console.log("decreaseNum");
  setVal(val-1)
 }
 const jumpby5=()=>{
  setVal(val+5)
 }

  return (
    <div>
      <h1>value is={val}</h1>
      <button  onClick={increaseNum}  className='p-5 m-6 bg-gray-400 rounded-2xl'>increment</button>
      <button  onClick={decreaseNum} className='p-5 m-6 bg-gray-400 rounded-2xl'>Decrement</button>
      <button  onClick={jumpby5} className='p-5 m-6 bg-gray-400 rounded-2xl'>jumpby5</button>
    </div>
  )
}

export default App
