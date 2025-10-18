import React, { useState } from 'react'

const App = () => {
  const[title,setTitle]= useState('')
  const formHandle = (e)=>{
    e.preventDefault()
    console.log("form submitted by",title);
    setTitle('')
    
  }
  return (
    <div>
      <form  onSubmit={(e)=>{formHandle(e)}}>
        <input 
        type="text" 
        placeholder='Enter Your Name'
        value={title}
        onChange={(e)=>{
         setTitle( e.target.value)
        }} 
        />
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
