import React from 'react';

const Task = (props) => {
  // console.log(props)
  return <div id="list-wrapper">

    <li id="list-item" onClick={(event) => { props.toggleDone(event) }}>{props.task}</li>

    <button className="removeButton" id={props.index} onClick={(event) => { props.removeItemOnClick(event) }}>Del</button>


  </div>
}

export default Task