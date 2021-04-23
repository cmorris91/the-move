import React from "react";
import {Link} from "react-router-dom"

function DeleteButton(props) {
    return(
        <div>
                <button
                    className="button"
                    onClick={props.onClick}
                    type="submit">Delete Event
                </button>
        </div>
    )
}

export default DeleteButton;