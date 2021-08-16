import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid"; // 1. import the UUID
import "./TodoList.css";

const TodoListHook = (props) => {
  // const [title, setTitle] = useState("");
  const [newItemName, setNewItemName] = useState("");
  const [todos, setTodos] = useState([
    {
      id: uuidv4(), // 2. add uuid to the item
      name: "Buy Milk",
      isDone: false,
    },
    {
      id: uuidv4(), // 3.add uuid to the item
      name: "Do push up",
      isDone: true,
    },
  ]);

  const createSetTodo = (todo) => {
    return (isDone) => {
      const currentTodo = todos.filter(
        (todoToFilter) => todoToFilter.id === todo.id
      )[0];
      currentTodo.isDone = isDone;
      setTodos([...todos]);
    };
  };

  const createDeleteTodo = (todo) => {
    return () => {
      const todosWithoutItem = todos.filter(
        (todoToFilter) => todoToFilter.id !== todo.id
      );
      setTodos([...todosWithoutItem]);
    };
  };
  const displayTodos = () => {
    return todos.map((todo) => {
      const setTodo = createSetTodo(todo);
      const deleteTodo = createDeleteTodo(todo);

      // 5. pass in the method as a prop to Todo component
      return (
        <TodoItem
          key={todo.id}
          name={todo.name}
          isDone={todo.isDone}
          setTodo={setTodo}
          deleteTodo={deleteTodo}
        />
      );
    });
  };

  const addNewTodo = () => {
    //console.log(newItemName);
    if (!newItemName || !newItemName.length) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: uuidv4(),
        name: newItemName,
        isDone: false,
      },
    ]);

    setNewItemName("");
  };

  const handleChange = (event) => {
    setNewItemName(event.target.value);
  };

  return (
    <div className="todo__container">
      <div className="todo__header">{props.title}</div>
      <br></br>
      <input
        type="text"
        value={newItemName}
        onChange={handleChange}
        placeholder="Take a break"
      />
      <button onClick={() => addNewTodo()}>add</button>

      <div>{displayTodos()}</div>
    </div>
  );
};

export default TodoListHook;
