import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Grid, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

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

        <Grid>
             <br/>
             <br/>
             <br/>
            <h1 className="text-center">{singleEvent.event.name}</h1>
                   <br/>
            <Grid.Column width={4}>
            <br/>
            <Image src={singleEvent.event.images} style={{margin:"0 auto", width:"200px", display:"block"}}/>
            </Grid.Column>
            <Grid.Column width={9}>
            <br/>
            <p>{singleEvent.event.host_name}
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
            <em>rating: {singleEvent.event.averageRating}</em></p>
            </Grid.Column>
            <Grid.Column width={3}>
            <h2>testinge</h2>
            </Grid.Column>
        </Grid>
    )
}

export default EventDetail;