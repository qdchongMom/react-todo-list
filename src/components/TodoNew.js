import React, { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid"; // 1. import the UUID
import "./TodoNew.css";

const TodoNew = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  const handleChange = (event) => {
    // setNewTitle({ setNewTitle: event.target.value });
    setNewTitle(event.target.value);
  };

  const addNewTodoList = () => {
    if (!newTitle || !newTitle.length) {
      return;
    }

    setNewTitle("");
    setTodoList([
      ...todoList,
      {
        id: uuidv4(),
        title: newTitle,
      },
    ]);
  };

  const displayAllTodoList = () => {
    return todoList.map((todoList) => {
      return <TodoList title={todoList.title} />;
    });
  };

  return (
    <div>
      <div className="todoList__add_box">
        <input
          type="text"
          value={newTitle}
          onChange={handleChange}
          placeholder="Input new title"
        />
        <button onClick={addNewTodoList}>add</button>
      </div>
      <div>{displayAllTodoList()}</div>
    </div>
  );
};

export default TodoNew;
