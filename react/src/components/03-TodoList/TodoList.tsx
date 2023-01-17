import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(['Demo task 1', 'Demo task 2', 'Demo task 3']);
  const [newTodoInput, setNewTodoInput] = useState('')

  const addTodo = () => {
    setTodos([...todos, newTodoInput])
    setNewTodoInput('')
  }

  const deleteTodo = (todoToDelete: any) => () => {
    setTodos(todos.filter(todo => todo !== todoToDelete))
  }

  return (
    <div>
      <h2>03. Todo List</h2>
      <div>
        <input
          type="text"
          aria-label="Add new todo"
          placeholder="Add your todo"
          value={newTodoInput}
          onChange={(e) => setNewTodoInput(e.target.value)}
        />
        <div>
          <button onClick={addTodo}>Submit</button>
        </div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <span>{todo}</span>
                <button onClick={deleteTodo(todo)}>Delete</button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
