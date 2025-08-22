import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text: text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'Completed') return todo.completed;
    if (filter === 'Incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <div className="card p-4 shadow">
        <h1 className="text-center mb-4">React Todo List</h1>
        <AddTodo addTodo={addTodo} />
        
        <div className="d-flex justify-content-center gap-2 mb-4">
          <button onClick={() => setFilter('All')} className={`btn ${filter === 'All' ? 'btn-primary' : 'btn-outline-secondary'}`}>All</button>
          <button onClick={() => setFilter('Completed')} className={`btn ${filter === 'Completed' ? 'btn-primary' : 'btn-outline-secondary'}`}>Completed</button>
          <button onClick={() => setFilter('Incomplete')} className={`btn ${filter === 'Incomplete' ? 'btn-primary' : 'btn-outline-secondary'}`}>Incomplete</button>
        </div>
        
        <TodoList
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;