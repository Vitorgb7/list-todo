import React from 'react'

const Todo = ({todo, removeTodo}) => {
  return (
    <div>
          <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <p className="category">({todo.category})</p>
            </div>
            <div>
              <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
            </div>
          </div>
    </div>
  )
}

export default Todo