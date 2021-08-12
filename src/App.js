import React, { Component } from 'react'
import TodoItem from './components/TodoItem'
import './App.css'
import todoData from './todoData'

// function component
/* function App() {

  const todoitems = todoData.map((item)=> {
    return(
      <TodoItem key={item.key} item={item} />
    )
  })

  return(
    <div className="todo-list">
      <h2>To-do List</h2>
      {todoitems}
    </div>
  )
} */

// class component
class App extends Component {
  constructor() {
    super()
    this.state = {
      todos : todoData
    }
    this.handleChange =this.handleChange.bind(this)
  }

  // this method is use to change the state or the checkboxes
  // updatedTodo array will contain the updated array of all the dataset(return todo)
  // the change is that we have changed the completed property of a certain dataset
  // now the function will update the previous todos array with updated array which is passed to the render function
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodo = prevState.todos.map(todo => {
        if(todo.id===id) {
          todo.completed=!todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodo
      }
    })
  }

  render() {
    const todoitems = this.state.todos.map(item => <TodoItem handleChange={this.handleChange} key={item.id} item={item} />)

    return(
      <div className="todo-list">
        <h2>To-do List</h2>
        {todoitems}
      </div>
    )
  }
}

export default App