import React from 'react'

const App = () => {

    const  getData =  async ()=> {
    const api = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await api.json()
    console.log(response);
    
  }
  return (
    <div>
     <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
