import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex items-start flex-col p-10 gap-4'>
        <input className='px-5 w-1/2 py-2 font-bold  rounded border-2' type="text" 
        placeholder='Enter your Task' />
        <textarea className='px-5 w-1/2 font-medium py-2 h-32 rounded border-2 ' type="text"
         placeholder='Enter Details' />
         <button className='bg-white w-1/2 h-18 font-bold text-black px-5 py-2 rounded border-2'>Add Notes</button>
      </form>
    </div>
  )
}

export default App
