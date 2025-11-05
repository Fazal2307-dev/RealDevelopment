import React from 'react'

const App = () => {
  //locaalstorage Clear
  // localStorage.clear();
  localStorage.setItem('user','fazal')
  const users= localStorage.getItem('user')
  console.log(users);
  
  return (
    <div>
      LocalStorage
    </div>
  )
}

export default App
