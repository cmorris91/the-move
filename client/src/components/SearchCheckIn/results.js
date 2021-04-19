import React from "react";
import {Link} from "react-router-dom"

function ResultEvents(props) {
    return (
        <div className="event-results">
            <Link to={`/check-in/${props.id}`}>
                <h2> {props.event_name}</h2>
                <p>{props.event_host}</p>
                <p>{props.event_date}</p>
            </Link>
        </div>
    )
}
export default ResultEvents;
