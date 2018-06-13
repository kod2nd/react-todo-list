import React, { Component } from "react";
import ToDoList from './ToDoList'
import "./App.css";

class App extends Component {
  render() {
    return (<div className="App">
      <ToDoList header="List 1" todos={['Buy Item', 'Complete Task', 'Do Something']} />
      <ToDoList header="List 2" todos={['Discard Item', 'Complete Task2', 'Buy Something']} />
    </div>);
  }
}

export default App;
