import React, { useState, useEffect } from "react";
import API from "../utils/API";

function EventDetail () {
    const [singleEvent, setSingleEvent] = useState({
        event: [],
    });

    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);

    useEffect(() => {
        API.getEvent (id)
            .then(res => {
            console.log(res)
            setSingleEvent({ ...singleEvent, event: res.data })})
            .catch(err => console.log(err));
            console.log(singleEvent)
    }, []);

    console.log(singleEvent);

    
    return (

        <div>
            <h1 className="text-center">{singleEvent.event.name}</h1>
                   <br/>
            <img src={singleEvent.event.images} align="center" style={{margin:"0 auto", width:"200px", display:"block"}}/>
            <p className="text-center" >{singleEvent.event.host_name}
                    <br/>
            {singleEvent.event.category}
                    <br/>
            {singleEvent.event.description}
                    <br/>
            {singleEvent.event.date}
                    <br/>
            {singleEvent.event.address}
                    <br/>
            {singleEvent.event.city}, {singleEvent.event.state} {singleEvent.event.zipcode}
                    <br/>
            {singleEvent.event.date_created}
                    <br/>
            <em>rating: {singleEvent.event.rating}</em></p>
            </div>
    )
}

export default EventDetail;