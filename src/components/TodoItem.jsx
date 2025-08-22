import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
    
  const itemClasses = `list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'list-group-item-secondary' : ''}`;
  const textClasses = `ms-2 me-auto ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`;

  return (
    <li className={itemClasses}>
      <div className={textClasses} onClick={() => toggleComplete(todo.id)} style={{ cursor: 'pointer' }}>
        {todo.text}
      </div>
      <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger btn-sm">Remove</button>
    </li>
  );
}

export default TodoItem;