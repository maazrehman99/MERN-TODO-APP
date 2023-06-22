import React, { useEffect } from 'react';
import { getTodos } from '../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';
import Todos from './Todos';
import { Link } from 'react-router-dom';

const DisplayTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <article>
     <Link to={'/displaytodo'} > <h2>Active Todos</h2></Link>
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
