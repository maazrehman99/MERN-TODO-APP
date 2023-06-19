import * as actiontype from '../Actions/type'


const todosReducers = (state=[], action) => {
 switch (action.type) {
 case actiontype.ADD_NEW_TODO:
    return [action.payload, ...state];

    case actiontype.GET_ALL_TODO:
    return action.payload
     
    default :
     return state
   }
 }
export default todosReducers