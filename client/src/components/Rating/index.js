import React from "react";

function Rating (props) {
    return (
        <div>
            <label for="rating">Rate the Event</label>
            <input type="number" 
            className='form-input'
            onChange = {props.handleInputChange}
            id="rating"  
            value={props.value}
            name={props.name}
            min="0" max="5">
            </input>
        </div>
    )
}

export default Rating;