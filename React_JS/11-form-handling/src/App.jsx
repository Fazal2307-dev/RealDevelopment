import React from 'react'

const App = () => {
const formHandler = (e) =>{
    e.preventDefault()
      console.log("Form Submitted");      
  }
  return (
    <div>
      <form  onSubmit={(e)=>{
          formHandler(e)
        }}>
        <input type="text" placeholder='Enter Your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
