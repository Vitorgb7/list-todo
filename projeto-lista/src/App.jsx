import { useState } from 'react'
import Todo from './components/todo'
import TodoForm from './components/TodoForm'
import Search from './components/search'

import './App.css'

function App() {
  const [todo, setTodo] = useState([
    {
      id:1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])
  
  const addTodo = (text, category) => {
    const newTodo = [
      ...todo,
      {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }
  ]
  setTodo(newTodo);
}

const removeTodo = (id) =>{
    const newTodos = [...todo]
    const filterTodos = newTodos.filter(todo =>
       todo.id !== id ? todo :null
       );
       setTodo(filterTodos)
}

const [search, setSearch] = useState("")


  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search ={search}  setSearch={setSearch}/>
      <div className="todo-list">
        {todo.filter((todo) => todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((todo) => (
         <Todo key={todo.id}  todo={todo}  removeTodo={removeTodo}/>
        ))}
      </div>

      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
