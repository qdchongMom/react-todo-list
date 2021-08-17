import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // 1. import the UUID
import "./TodoNew.css";
import TodoListHook from "./TodoListHook";

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
      return <TodoListHook title={todoList.title} />;
    });
  };

  return (
    <div data-testid="TodoNew">
      <div className="todoList__add_box">
        <input
          data-testid="input"
          type="text"
          value={newTitle}
          onChange={handleChange}
          placeholder="Input new title"
        />
        <button onClick={addNewTodoList} data-testid="button-add-todo">
          add
        </button>
      </div>
      <div>{displayAllTodoList()}</div>
    </div>
  );
};

export default TodoNew;
