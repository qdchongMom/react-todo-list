import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoNew from "./components/TodoNew";

function App() {
  return (
    <div>
      <TodoNew />
      {/* <TodoList title="Title from App" /> */}
    </div>
  );
}

export default App;
