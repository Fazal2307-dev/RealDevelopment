import React from 'react'

const App = () => {
const formHandle = (e)=>{
  e.preventDefault()
console.log("form Handling");

}
  return (
    <div>
      <form onSubmit={(e)=>{formHandle(e)}}>
        <input type="text" placeholder='Enter Your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
