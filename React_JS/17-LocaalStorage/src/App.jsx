import React from 'react'

const App = () => {
  //locaalstorage Clear
  // localStorage.clear();
  // localStorage.setItem('user','fazal')
  // localStorage.setItem('age','18')
  // const users= localStorage.getItem('user')
  // const age = localStorage.getItem('age');

  const user = {
    name:'Fazal',
    age:24,
    city:"Barh"
  };
  localStorage.setItem('user',JSON.stringify(user));
  const users = JSON.parse(localStorage.getItem('user'));
  console.log(users);
  
  
  return (
    <div>
      LocalStorage
    </div>
  )
}

export default App
