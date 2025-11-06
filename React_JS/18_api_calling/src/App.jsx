import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data,setData] = useState([])
    const  getData =  async ()=> {
      //using fetch method for api
    // const api = await fetch('https://jsonplaceholder.typicode.com/users')
    // const response = await api.json()
    // console.log(response);
    // using axios method for api
    // const response = await Axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(response.data);
    
    const response = await axios.get("https://picsum.photos/v2/list")
   setData(response.data)
    

  }
  return (
    <div>
     <button onClick={getData}>Get Data</button>
     <div>
      {data.map(function(elem,idx){
          return  <h1>hello,{elem.author},{idx}</h1>
      })}
      
     </div>
    </div>
  )
}

export default App
