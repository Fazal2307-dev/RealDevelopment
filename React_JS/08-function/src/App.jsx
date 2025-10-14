import React from 'react'

const App = () => {
  const btnClicked = ()=>{
    console.log("Hey Fazal you clicked the btn")
  }
  return (
    <div>
      <button onClick={btnClicked} className='bg-gray-400 p-2 m-3 rounded-full'>Click me</button>
    </div>
  )
}

export default App
