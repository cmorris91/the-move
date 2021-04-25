import React, { useState, useEffect } from "react";
import API from "../utils/API";
import {Link} from "react-router-dom"
import { Grid, Image, Icon, Button, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import DeleteButton from "../../src/components/Delete"
import Afeedback from "../components/Afeedback"
import Images2 from "../components/Images2";


function EventDetail () {
        //first state is for the event, the second is for bookmark
    const [singleEvent, setSingleEvent] = useState({
        event: []
    });
const [saveBookmark, setSaveBookmark] = useState({
                //set the isBookmark to false to protect the server from trying to send null to the array
                isBookmark:false
        })
        //gathers all the data it needs for event id and user id
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
//on load it will load the event, then ask if you have a Bookmark

    useEffect(() => {
        API.getEvent (id)
          .then(res => {
          setSingleEvent( res.data )})
          .catch(err => console.log(err))
          .then( 
        
        API.getBookmark({name:uid})
          .then(res => {
          //the api will return true or false
          setSaveBookmark({ isBookmark: res.data })})
          .catch (err => console.log(err)));
    }, []);

//if no bookmark already it will save a brand new bookmark
    function handleBookmarkSave(data) {
        data.preventDefault();
        if(saveBookmark.isBookmark === true){
            API.updateBookmark(info2)
        }

        else if (saveBookmark.isBookmark === false){
                API.saveBookmark(info2)
                .then(res => {
                console.log(res)})
                .then(refresh())
                .catch (err => console.log(err));
        }
    }


      function handleDelete() {
        API.deleteEvent(id)
        .then(res => {
        alert("this event has been deleted")
        window.location.replace("/event")
        })
        .catch(err => console.log(err))
      }

    //renders the event data
    return (
            <Container textAlign="center">
            <h1 className="event-title">{singleEvent.name}</h1>
            <Grid.Column width={9}>
        <div className="eventDetail-box">
            <div className="row"> 
                <p className="event-detail col">{singleEvent.description}</p> 
            </div>
            <div className="row"> 
                <p className="label col">Hosted By :</p>
                <p className="event-detail col">{singleEvent.host_name}</p>
            </div>
            <div className="row"> 
                <p className="label col">When :</p>
                <p className="event-detail col">{new Date(singleEvent.date).toDateString()}</p>
            </div>
            <div className="row"> 
                <p className="label col">Where :</p>
                <p className="event-detail col">{singleEvent.address} <br/>{singleEvent.city} {singleEvent.state}, {singleEvent.zipcode}</p> 
                  
            </div>
            <div className="row"> 
                <p className="label col">Type of Event :</p> 
                <p className="event-detail col">{singleEvent.category}</p> 
            </div>
            <div className="row">  
                <p className="label col">Rating :</p>
                <p className="event-detail col"> {singleEvent.averageRating}</p>
            </div>
            <Images2 images={singleEvent.images} />
            </div>
        <div>
            <Afeedback 
            className="feedback-item"   
            allfeedback={singleEvent.feedback} />
             
            </div>
            </Grid.Column>
            <Grid.Column width={3}>
              <div className="event-buttons">      
            <Button onClick={handleBookmarkSave}>
            <Icon name='bookmark outline' />
             Bookmark
             </Button>
             <Link to={`/check-in/${singleEvent._id}`}>
             <Button>
             <Icon name='map marker alternate' />
                 Check-in
                </Button>
                </Link>
                </div>
            </Grid.Column>
            {singleEvent.user_id === uid ? (
                <DeleteButton 
                className="button"
                onClick={handleDelete}
                />    
                ) : (
                        <p></p>
                )
        }
        </Container>
       
    )
}

export default EventDetail;