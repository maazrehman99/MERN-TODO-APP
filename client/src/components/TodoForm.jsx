import React from 'react'
import { useState } from 'react'
import { addNewTodo } from '../Redux/Actions'
import { useDispatch } from 'react-redux'
import Header from './Header.jsx/Header'
import DisplayTodo from './DisplayTodo'

const TodoForm = () => {

    const [text,setText]=useState('')
    const dispatch =useDispatch()
  const onFormSubmit = (e) => {
      e.preventDefault()
      dispatch(addNewTodo(text))
      setText('')
  }
  const onInputChange = (e) => {
      setText(e.target.value)
  }
    return (
      <div>
        <Header/>
        <form className="todo-form" onSubmit={onFormSubmit}>
          <input
            type="text"
            placeholder="Enter your task"
            onChange={onInputChange}
             className="todo-input"
            value={text}
          />
        </form>
        <DisplayTodo/>
      </div>
    );
}

export default TodoForm