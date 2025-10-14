import React from 'react'

const App = () => {
  const inputChanging = (val)=>{
    console.log(val)
  }
  
  return (
    <div>
      <input  onChange={function(elem){
        inputChanging(elem.target.value)
      }}    type="text" placeholder='Enter Name' className='bg-gray-400 p-4 m-4 text-m' />
    </div>
  )
}

export default App
