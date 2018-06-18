import React, { Component } from "react";
import ToDoList from './ToDoList'
import InputForm from './InputForm'
import { todos } from '../seedData'
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: "",
      todos: todos
    }

  }
  render() {
    return (<div className="App">
      <ToDoList header="To Do List"
        todos={this.state.todos}
        removeItemOnClick={(event) => this.removeItemOnClick(event)}
        toggleDone={(index) => { this.toggleDone(index) }} />

      <InputForm value={this.state.inputValue}
        onChangeHandler={(event) => { this.inputChangeHandler(event) }}
        addItemOnSubmit={(event) => this.addItemOnSubmit(event)} />

    </div>);
  }


  toggleDone(index) {
    console.log(index)
    // const index = this.state.todos.indexOf(index);
    const updatedTodo = {
      name: this.state.todos[index].name,
      isCompleted: this.state.todos[index].isCompleted === true ? false : true
    };

    // console.log(event)

    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        updatedTodo,
        ...this.state.todos.slice(index+1)
      ]
    });
  }

  // Question for David/Sahil: How to remove item without using the buttons ID?
  removeItemOnClick(event) {
    this.setState({ todos: this.state.todos.filter((item) => item !== this.state.todos[event.target.id]) })
  }

  inputChangeHandler(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  addItemOnSubmit(event) {
    event.preventDefault()
    const newTask = {
      name: this.state.inputValue,
      isCompleted: false
    }
    if (this.state.inputValue.trim() !== "") {
      this.setState({ todos: [...this.state.todos, newTask] })
      this.setState({ inputValue: "" })
    }
  }
}

export default App;
