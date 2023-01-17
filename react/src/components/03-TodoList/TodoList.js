import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(['Walk the dog', 'Water the plants', 'Wash the dishes']);
  const [newTodoInput, setNewTodoInput] = useState('')

  const addTodo = () => {
    setTodos([...todos, newTodoInput])
    setNewTodoInput('')
  }

  const deleteTodo = todoToDelete => () => {
    setTodos(todos.filter(todo => todo !== todoToDelete))
  }

  return (
    <div>
      <h1>03. Todo List</h1>
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
