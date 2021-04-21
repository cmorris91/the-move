import { PromiseProvider } from "mongoose";
import React from "react";

function Images (props) {
    return (
    <div>
            <input
            type="file"
            name={props.name}
            onChange={props.handleInputChange}
            value={props.value}
            className="form-input"
            />
    </div>
    )
}

export default Images;

