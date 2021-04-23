import React from "react";
import "./style.css"

function Rating (props) {
    return (
        <div className="rating-container">
            <h2>Rate this Event </h2>
            <label for="rating">Rating</label>
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