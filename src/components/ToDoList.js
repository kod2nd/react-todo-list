import React from 'react';
import Title from './Title'
import Task from './Task'

const ToDoList = (props) => {
    // console.log(props);
    return (
      <div>
        <Title headerName={props.header} />
        <ul>
          {props.todos.map((task, index) => {
            return <Task key={index} index={index} task={task} toggleDone={props.toggleDone} removeItemOnClick={props.removeItemOnClick}/>;
          })}
        </ul>
      </div>
    );
  }

export default ToDoList