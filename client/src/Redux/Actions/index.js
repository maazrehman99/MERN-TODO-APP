import axios from 'axios';
import { ADD_NEW_TODO,GET_ALL_TODO } from './type';
const API_URL = 'http://localhost:8000'


export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });
    dispatch({
      type: ADD_NEW_TODO,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error while adding new todo:", error.message);
  }
};

export const getTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);
    dispatch({
      type: GET_ALL_TODO,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error while getting todos:", error.message);
  }
}
export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos/${id}`);
    dispatch({
      type: GET_ALL_TODO,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error while getting todos:", error.message);
  }
}