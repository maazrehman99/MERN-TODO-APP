import {createStore,combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import todosReducers from './Reducers/todosReducers';

const middleWare=[thunk]


const reducers=combineReducers({
    todos:todosReducers
});

const store=createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store