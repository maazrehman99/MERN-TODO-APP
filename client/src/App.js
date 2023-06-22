import Header from "./components/Header.jsx/Header";
import './App.css'
import TodoForm from "./components/TodoForm";
import DisplayTodo from "./components/DisplayTodo";
import { BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
  <TodoForm/>
  <Routes>
  
  
    <Route path="/displaytodo" element={<DisplayTodo/>}/>
  </Routes>
  
  
  </BrowserRouter>
  );
}

export default App;
