import React from "react";


function Rating (props) {
    return (
        <div className="rating-container">
            <h1 className="input-title">Rate the Event </h1>
            <input type="number" 
            className='form-input'
            onChange = {props.handleInputChange}
            id="rating"  
            value={props.value}
            name={props.name}
            min="0" max="5" style={{textAlign: "center"}}>
            </input>
        </div>
    )
}

export default Rating;