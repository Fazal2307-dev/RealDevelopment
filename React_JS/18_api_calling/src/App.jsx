import React from 'react'

const App = () => {

    async function getData (){
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(api);
    
  }
  return (
    <div>
     <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
