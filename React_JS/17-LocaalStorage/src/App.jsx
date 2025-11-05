import React from 'react'

const App = () => {
  //locaalstorage Clear
  // localStorage.clear();
  localStorage.setItem('user','fazal')
  localStorage.setItem('age','18')
  const users= localStorage.getItem('user')
  const age = localStorage.getItem('age');

  console.log(users,age);
  
  return (
    <div>
      LocalStorage
    </div>
  )
}

export default App
