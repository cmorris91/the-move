import React, { useState, useEffect } from "react";
import API from "../utils/API";
import {Link} from "react-router-dom"
import { Grid, Image, Icon, Button, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'


function EventDetail () {
    const [singleEvent, setSingleEvent] = useState({
        event: []
    });
        const [saveBookmark, setSaveBookmark] = useState({
                isBookmark:false
        })
        const url = window.location.pathname;
        const id = url.substring(url.lastIndexOf('/') + 1);
        const user =localStorage.getItem("user")
        const user2 = user.split("/")
        const uid=user2[1]
        let info = id + "/" + uid
        const info2 = info.split("/")
        
function refresh(){
        window.location.reload()
}


    useEffect(() => {
        API.getEvent (id)
          .then(res => {
         
          setSingleEvent({ ...singleEvent, event: res.data })})
          .catch(err => console.log(err))
          .then( 
        
        API.getBookmark({name:uid})
          .then(res => {
          console.log("hello",res.data)
          setSaveBookmark({ isBookmark: res.data })})
          .catch (err => console.log(err)));
    }, []);

    console.log("singleEvent", singleEvent);
    console.log("bookmark",saveBookmark)

    function handleBookmarkSave(data) {
        data.preventDefault();
       
        if(saveBookmark.isBookmark === true){
        console.log("saveBookmark", saveBookmark);
                console.log("hello")
            API.updateBookmark(info2)
        }
        else if (saveBookmark.isBookmark === false){
            console.log("hi")
            console.log("saveBookmark", saveBookmark);
                API.saveBookmark(info2)
                .then(res => {
                console.log(res)})
                .then(refresh())
                .catch (err => console.log(err));
        }
    }


    function componentDidMount(){
        const user =localStorage.getItem("user")
        let info = id + "/" + user
        const info2 = info.split("/")
        API.getBookmark(info2)
          .then(res => {
            console.log(res)
           setSingleEvent({ isBookmark: res.data })})
          .catch (err => console.log(err));
      }

    
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
            <Button onClick={handleBookmarkSave}>
            <Icon name='bookmark outline' />
             Bookmark
             </Button>
             <Link to={`/check-in/${singleEvent.event._id}`}>
             <Button>
             <Icon name='map marker alternate' />
                 Check-in
                </Button>
                </Link>
            </Grid.Column>
        </Container>
    )
}

export default EventDetail;