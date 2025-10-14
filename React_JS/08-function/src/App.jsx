import React from 'react'

const App = () => {
  
  return (
    <div>
      <input  onChange={()=>{
        console.log('user is typing........')
      }}    type="text" placeholder='Enter Name' className='bg-gray-400 p-4 m-4 text-m' />
    </div>
  )
}

export default App
