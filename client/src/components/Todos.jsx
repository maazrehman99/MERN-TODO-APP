import React from "react";
import { useState } from "react";
import { toggleTodo, updateTodo,deleteTodo } from "../Redux/Actions";
import { useDispatch } from "react-redux";
const Todos = ({ todo }) => {
  const dispatch = useDispatch();
  const [editing,setEditing]=useState(false)
  const [text,setText]=useState(todo.data)


  const handleEditSubmit=(e)=>{
    e.preventDefault()
    setEditing(prevState=>!prevState)
    dispatch(updateTodo(todo._id,text))
  }

  return (
    <ul>
      {" "}
      <li
        className="task"
        onClick={() => dispatch(toggleTodo(todo._id))}
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          color: todo.done ? "red" : "black",
        }}
      >
        <span style={{ display: editing ? "none" : "" }}> {todo.data}</span>

        <form
          style={{ display: editing ? "inline" : "none" }}
          onSubmit={handleEditSubmit}
        >
          <input
            type="text"
            value={text}
            className="edit-todo"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </form>

        <span>
          <i
            className="fas fa-check icon"
            onClick={handleEditSubmit}
            style={{ display: editing ? "block" : "none" }}
          ></i>
          <i
            className="fas fa-trash icon"
            onClick={() => dispatch(deleteTodo(todo._id))}
            style={{ display: editing ? "none" : "" }}
          ></i>
        </span>
        <span>
          <i
            className="fas fa-pen icon"
            onClick={() => setEditing((prevState) => !prevState)}
            style={{ display: editing ? "none" : "" }}
          ></i>
        </span>
      </li>
    </ul>
  );
};

export default Todos;
