import React from 'react'

const Card = (props) => {
  return (
    <div className='parent'>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1756990683708-afd38ed20f1f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"
         alt="" />
        <h1>{props.user}</h1>
        <p>{props.age}</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card;
