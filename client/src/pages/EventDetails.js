import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Grid, Image, Icon, Button, Container } from 'semantic-ui-react'
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

        <Container textAlign="center">
             <br/>
             <br/>
             <br/>
            <h1>{singleEvent.event.name}</h1>
                   <br/>
            <Grid.Column width={4}>
            <br/>
            <Image src={singleEvent.event.images} size='medium' centered />
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
            <br/>
            </Grid.Column>
            <Grid.Column width={3}>
            <Button>
            <Icon name='bookmark outline' />
             Bookmark
             </Button>
            </Grid.Column>
        </Container>
    )
}

export default EventDetail;