import React, {Component} from 'react'
import Todo from './Todo'
import todoData from './todoData'

class App extends Component
{
  constructor(){
    super()
    this.state = {
      name: "Alex",
      todos: todoData
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id){
    this.setState(prevState => {
     const updatedTodos = prevState.todos.map(todo => {
       if(todo.id === id){
         todo.completed = !todo.completed
       }
       return(todo)
     })
     return({
       todos: updatedTodos
     })
     
    })
    console.log(id)
  }

  render(){
    const data = this.state.todos.map(item => {
      return (<Todo key={item.id} items={item} handleChange={this.handleChange}/>)
    })
    return(
      <div>
        <h1>{data}</h1>
      </div>
    )
  }
}

export default App