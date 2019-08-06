import React from 'react';
// import Todo from './components/TodoComponents/Todo'
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"
import "./components/TodoComponents/Todo.css"


const todoData = [
  {
    task: 'Watch the Bears beat the Packers',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Buy a new Laptop',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Continue beasting React.JS',
    id: 1528817084485,
    completed: true
  },
  {
    task: 'Argue why DC is greater than Marvel',
    id: 1528817084495,
    completed: true
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 

  constructor(){
    super();
    this.state={
      todo: todoData
  }
}

  addItem = (event, item) => {
    event.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo:[...this.state.todo, newItem]
    })
  }

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    })
  } 

  toggleItem = id => {
    console.log(id)
    this.setState({
      todo: this.state.todo.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
       
        <TodoList 
          todo={this.state.todo}
          toggleItem={this.toggleItem} 
        />
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;