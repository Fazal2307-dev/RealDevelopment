import React from 'react'
import { useState } from 'react';
const Content = () => {
    const [name,setName]= useState("")
    const handlechangeName = ()=>{
    const name = ['fazal','afzal','sanya'];
    const int = Math.floor(Math.random() * 3);
    setName(name[int]);
  }


  return (
    <main>
      <p>
        Hello {name}!
      </p>
      <button onClick={handlechangeName}>Change Name!</button>
         {/* <button onClick={()=>handleclick2('fazal')}>click it</button> */}
    </main>
  )
}

export default Content
