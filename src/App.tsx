import React, { useState } from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import { Todo } from './todo-model'

function App() {
  const [todo, setTodo] = useState<Todo[]>([])
  const todoAppHandler = (text: string) => {
    setTodo(prevTodos => [...prevTodos, { id: Math.random().toString(), title: text }])
  }
  const todoDeleteHandler = (todoId: string) => {
    setTodo(prevtodo => {
      return prevtodo.filter(item => item.id !== todoId)
    })
  }
  return (
    <div>
      <NewTodo todoApp={todoAppHandler} />
      <TodoList items={todo} deleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
