import * as actiontype from '../Actions/type'


const todosReducers = (state=[], action) => {
 switch (action.type) {
   case actiontype.ADD_NEW_TODO:
     return [action.payload, ...state];

   case actiontype.GET_ALL_TODO:
     return action.payload;

   case actiontype.TOGGLE_TODO:
     return state.map((todo) =>
       todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
     );

   default:
     return state;
 }
 }
export default todosReducers