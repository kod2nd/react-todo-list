import React from 'react';

const InputForm = (props) => {
    return (
        <div>
            <input type="text"
                value={props.value}
                placeholder="Add an item to the list..."
                onChange={(event) => { props.onChangeHandler(event) }}
                onKeyDown={(event) => { props.onKeyDown(event) }} />
            <button id="add-button" onClick={props.submit}>Add to List</button>
        </div>
    )
}

export default InputForm;
