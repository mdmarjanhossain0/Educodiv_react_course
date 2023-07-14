import React, { useState } from 'react'

export const ConditionalRenderingIf = () => {
  const condition=false;

  if (condition) {
    return <h1>Show Component A</h1>;
  } else {
    return <h1>Show Component B</h1>;
  }
}


export const ConditionalRenderingTernary = () => {
  const condition=true;

  return (
    <div>
      {condition ? <h1>Show Component A</h1> : <h1>Show Component B</h1>}
    </div>
  )
}

export const ConditionalRenderingLogical = () => {
  const condition=true;

  return (
    <div>
      {condition && <h1>Showing Component With Logical conditional rendering</h1>}
    </div>
  )
}


export const ConditionalRenderingInlineFunc = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy application', completed: false },
  ]);
  
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </span>
        </div>
      ))}
    </div>
  );
  
  
}


