import React from 'react';
import Title from './Title'
import Task from './Task'

const ToDoList = (props) => {
    console.log(props);
    return (
      <div>
        <Title headerName={props.header} />
        <ul>
          {props.todos.map((task, index) => {
            return <Task key={index} task={task} />;
          })}
        </ul>
      </div>
    );
  }

export default ToDoList