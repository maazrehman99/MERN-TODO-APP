import React from "react";
import { toggleTodo } from "../Redux/Actions";
import { useDispatch } from "react-redux";
const Todos = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo.done ? "line-through" : "none",
        color: todo.done ? "red" : "black",
      }}
    >
      <span>{todo.data}</span>
      <span>
        <i className="fas fa-trash icon"></i>
      </span>
      <span>
        <i className="fas fa-pen icon"></i>
      </span>
    </li>
  );
};

export default Todos;
