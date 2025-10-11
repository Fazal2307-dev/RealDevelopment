import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='fazal' age={25} img="https://images.unsplash.com/photo-1758846182585-c37d8c2946c2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"/>
      <Card user='afzal' age={18}img="https://images.unsplash.com/photo-1668765592438-8a37d2cef565?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"/>
      <Card user='aman' age={25}img="https://images.unsplash.com/photo-1608979174671-54608f734528?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"/>

     
    </div>
  )
}

export default App
