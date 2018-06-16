import React, { Component } from "react";
import ToDoList from './ToDoList'
import InputForm from './InputForm'
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: "",
      todos: ['Buy Item', 'Complete Task', 'Do Something']
    }

  }
  render() {
    return (<div className="App">
      <ToDoList header="To Do List"
        todos={this.state.todos}
        removeItemOnClick={(event) => this.removeItemOnClick(event)}
        toggleDone={(event) => { this.toggleDone(event) }} />

      <InputForm value={this.state.inputValue}
        onChangeHandler={(event) => { this.inputChangeHandler(event) }}
        submit={() => this.addItemOnClick()}
        onKeyDown={(event) => { this.onKeyDownHandler(event) }} />

    </div>);
  }


  toggleDone(event) {
    // console.log(event.target)
    event.target.classList.toggle("done");
  }

  // Question for David/Sahil: How to remove item without using the ID?
  removeItemOnClick(event) {
    console.log(event.target.id)
    this.setState({ todos: this.state.todos.filter((item) => item !== this.state.todos[event.target.id]) })
    console.log("this state todos are:" + this.state.todos)
  }

  inputChangeHandler(event) {
    console.log(event.target.value)
    this.setState({
      inputValue: event.target.value
    })
  }

  addItemOnClick() {
    if(this.state.inputValue.trim() !== ""){
    this.setState({ todos: [...this.state.todos, this.state.inputValue] })
    this.setState({ inputValue: "" })}
  }

  onKeyDownHandler(event) {
    if (event.keyCode === 13 && this.state.inputValue.trim() !== "") {
      this.setState({ todos: [...this.state.todos, this.state.inputValue] })
      this.setState({ inputValue: "" })
    }
  }
}

export default App;
