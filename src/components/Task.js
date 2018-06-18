import React from 'react';

const Task = (props) => {

  return <div id="list-wrapper">

    <li id="list-item"
      className={props.isCompleted === true ? "done" : ""}
      onClick={() => { props.toggleDone(props.index) }}>{props.task}</li>

    <button className="removeButton"
      id={props.index} onClick={(event) => { props.removeItemOnClick(event) }}>Del</button>


  </div>
}

export default Task