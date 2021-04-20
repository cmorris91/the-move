import React from "react";

function Feedback (props) {
    
    return (
        <div>
            <form>
                <input
                handleInputChange={props.handleInputChange}
                name={props.name}
                placeholder="Enter Comment Here"/>
            </form>
        </div>
    )
}

export default Feedback;