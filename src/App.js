import React,{useState} from "react";
import Header from "./components/Header";
import Form from "./components/Form";


const App=()=>{
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);

  return(
    <div className="Container">
      <div className="app-wrap">
        <div>
          <Header />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  )
}
export default App;

// ****************************
// import logo from "./logo.svg";
// import { useState } from "react";
// import "./App.css";
// import Form from "./Form";
// import { findAllByAltText } from "@testing-library/react";
// import Todoitem from "./Todoitem";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const addTodo = (text) => {
//     console.log(text)
//     let id = 1;
//     if (todos.length > 0) {
//       id = todos[0].id + 1;
//     }
//     console.log((todos.includes(text)))
//     if((todos.includes(text))==false){
//     let todo = { id: id, text: text, completed: false };

//     let newTodos = [todo, ...todos];
//     setTodos(newTodos);
//     }
//     console.log(todos);

//   };

//   const removeTodo = (id) => {
//     let ubdateTodos = [...todos].filter((todo) => todo. id !== id);
//     setTodos(ubdateTodos);
//   };
//   return (
//     <div className="todo-app">
//       <h1>Todo List</h1>
//       <Form addTodo={addTodo} />
//       {todos.map((todo) => {
//         return <Todoitem removeTodo={removeTodo} todo={todo} key={todo.id} />;
//       })}
//     </div>
//   );
// }

// export default App;