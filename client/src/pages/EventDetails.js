import React, { Component, useState, useEffect } from "react";
import API from "../utils/API";
import Event from "./event";

const EventDetail = props => {
    const [singleEvent, setSingleEvent] = useState();

    useEffect(() => {
        API.getEvent(singleEvent.match.params.id)
            .then(res => {
                console.log(res)
                setSingleEvent({ event: res.data })})
            .catch(err => console.log(err));
    }, []);

    // const addBookmark = () => {
    //     setSingleEvent({
    //         type: Event,
    //         post: state.currentPost
    //     });
    // };

    // const removeBookmark = () => {
    //     setSingleEvent({
    //         type: Event,
    //         _id: state.currentPost._id
    //     });
    // };
    
    console.log(props)
    return (

        <div>
            <h1>{singleEvent.specific.name}</h1>
                   <br/>
            {singleEvent.specific.images}
            <p>{singleEvent.specific.host_name}
                    <br/>
            {singleEvent.specific.category}
                    <br/>
            {singleEvent.specific.description}
                    <br/>
            {singleEvent.specific.date}
                    <br/>
            {singleEvent.specific.address}
            {singleEvent.specific.city}
                    <br/>
            {singleEvent.specific.state}
                    <br/>
            {singleEvent.specific.zipcode}
                    <br/>
            {singleEvent.specific.date_created}
                    <br/>
            <em>{singleEvent.specific.rating}</em></p>
                

            </div>
    )
}


export default EventDetail;