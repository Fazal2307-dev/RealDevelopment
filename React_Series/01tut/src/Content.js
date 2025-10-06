import React from 'react'

const Content = () => {
    const handlechangeName = ()=>{
    const name = ['fazal','afzal','sanya'];
    const int = Math.floor(Math.random() * 3);
    return name[int];
  }
  return (
    <main>
      <p>
        Hello {handlechangeName()}!
      </p>
    </main>
  )
}

export default Content
