import React from 'react';

const Task = (props) => {
  // console.log(props)
    return <div >
        <li onClick={(event) => {props.toggleDone(event)}}>{props.task}</li>
        <button id={props.index} onClick={(event) => {props.removeItemOnClick(event)}}>Remove Item</button>
      </div>
  }

export default Task