import React from 'react'

const Todos = ({todo}) => {
  
  return (
    <li  className='task'>
        <span>{todo.data}</span>
        <span >
            <i  className="fas fa-trash icon" ></i>
        </span>
        <span>
            <i  className='fas fa-pen icon' ></i>
        </span>
    </li>
  )
}

export default Todos