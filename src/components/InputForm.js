import React from 'react';

const InputForm = (props) => {
    return (
        <form>
            <input type="text"
                value={props.value}
                placeholder="Add an item to the list..."
                onChange={(event) => { props.onChangeHandler(event) }}
            />
            <button id="add-button" onClick={(event) => props.addItemOnSubmit(event)}>Add to List</button>
        </form>
    )
}

export default InputForm;
