import React from 'react'
import Axios from 'axios'

const App = () => {

    const  getData =  async ()=> {
      //using fetch method for api
    // const api = await fetch('https://jsonplaceholder.typicode.com/users')
    // const response = await api.json()
    // console.log(response);
    // using axios method for api
    const response = await Axios('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
    
  }
  return (
    <div>
     <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
