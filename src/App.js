import React, { useReducer } from "react";
import './App.css';
import {TodoContext} from "./context/todoContext";
import {todoReducer} from "./context/reducer";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

function App() {
  const [todolist , dispatch] = useReducer(todoReducer , []);

  return (
    <TodoContext.Provider value={{todolist, dispatch}}> 
      <div className="cls_App">
        <div className = "cls_AppTitle">TodoList</div>
        <TodoInput />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
