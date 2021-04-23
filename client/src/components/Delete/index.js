import React from "react";

function DeleteButton(props) {
    return(
        <div>
            <button
            className="button"
            onClick={props.onClick}
            type="submit">Delete Event</button>
        </div>
    )
}

export default DeleteButton;