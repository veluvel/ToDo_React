// import React, { useState } from "react";

// function Form(props) {
//   const [input, setInput] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.addTodo(input);
//     setInput("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="todo">
//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         className="todo-input"
//         placeholder="Add a Todo"
//       />

//       <button type="submit" className="todo-button">
//         Add
//       </button>
//     </form>
//   );
// }

// export default Form;