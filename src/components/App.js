import React, { Component } from "react";
import ToDoList from './ToDoList'
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      inputValue: "a",
      todos: ['Buy Item', 'Complete Task', 'Do Something']
    }

  }
  render() {
    return (<div className="App">
      <ToDoList header="List 1" 
      todos={this.state.todos} 
      removeItemOnClick={(event) => this.removeItemOnClick(event)} 
      toggleDone={(event) => {this.toggleDone(event)}}/>
    </div>);
  }


  toggleDone (event) {
    // console.log(event.target)
    event.target.classList.toggle("done");
  }

  // Question for David/Sahil: How to remove item without using the ID?
  removeItemOnClick(event) {
    console.log(event.target.id)
    this.setState({todos: this.state.todos.filter((item)=> item !== this.state.todos[event.target.id])})
    console.log("this state todos are:" + this.state.todos)
  }
}



export default App;
