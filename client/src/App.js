import Header from "./components/Header.jsx/Header";
import './App.css'
import TodoForm from "./components/TodoForm";
import DisplayTodo from "./components/DisplayTodo";


function App() {
  return (
  <div>
 <Header/>
 <TodoForm/>
 <DisplayTodo/>
  </div>
  );
}

export default App;
