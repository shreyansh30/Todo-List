import React from 'react'
import TodoItems from './TodoItems.js'

const Todos = (props) => {
  return (
    <div className='container my-3'>
      <h3 className='text-center my-3'>Todos List</h3>
      <hr/>
      {props.todos.length === 0 ? "No Todos to display":
      props.todos.map((todos) => {
        return (
          <TodoItems todos={todos} key={todos.sno} onDelete={props.onDelete}/>
      )
      })}
    </div>
  )
}

export default Todos
