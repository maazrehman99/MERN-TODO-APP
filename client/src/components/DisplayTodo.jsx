import React, { useEffect } from 'react';
import { getTodos } from '../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';
import Todos from './Todos';

const DisplayTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <article>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <Todos  
            key={todo._id}
            todo={todo}
          />
        ))}
      </ul>
    </article>
  );
};

export default DisplayTodo;
