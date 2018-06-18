import React from 'react';
import Title from './Title'
import Task from './Task'

const ToDoList = (props) => {
    // console.log(props);
    return (
      <div>
        <Title headerName={props.header} />
        <ul>
          {props.todos.map((object, index) => {
            return <Task key={index} index={index} task={object} toggleDone={props.toggleDone} removeItemOnClick={props.removeItemOnClick}/>;
          })}
        </ul>
      </div>
    );
  }

export default ToDoList