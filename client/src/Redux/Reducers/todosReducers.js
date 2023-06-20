import * as actiontype from "../Actions/type";

const todosReducers = (state = [], action) => {
  switch (action.type) {
    case actiontype.ADD_NEW_TODO:
      return [action.payload, ...state];

    case actiontype.GET_ALL_TODO:
      return action.payload;

    case actiontype.TOGGLE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );
    case actiontype.UPDATE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, data: action.payload.data }
          : todo
      );
    case actiontype.DELETE_TODO:
     return state.filter((todo) => todo._id !== action.payload._id);
;
    
    default:
      return state;
  }
};
export default todosReducers;
