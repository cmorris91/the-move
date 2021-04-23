import React, { useState, useEffect } from "react";
import API from "../utils/API";
import {Link} from "react-router-dom"
import { Grid, Image, Icon, Button, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
<<<<<<< HEAD
import Images2 from"../components/Images2"
import Afeedback from"../components/Afeedback"
=======
import DeleteButton from "../../src/components/Delete"

>>>>>>> ce08e49b268629b8e1389990b1ef676331ff0eac

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


<<<<<<< HEAD
console.log(saveBookmark.images)
=======
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

      function handleDelete() {
        API.deleteEvent(id)
        .then(res => {
        alert("this event has been deleted")
        window.location.replace("/event")
        })
        .catch(err => console.log(err))
      }

>>>>>>> ce08e49b268629b8e1389990b1ef676331ff0eac
    //renders the event data
    return (
        <Container textAlign="center">
             <br/>
             <br/>
             <br/>
            <h1>{singleEvent.name}</h1>
                   <br/>
            <Grid.Column width={4}>
            <br/>
            
            </Grid.Column>
            <Grid.Column width={9}>
            <br/>
            <p>{singleEvent.host_name}
                    <br/>
            {singleEvent.category}
                    <br/>
            {singleEvent.description}
                    <br/>
<<<<<<< HEAD
            {singleEvent.date}
=======
            {new Date(singleEvent.event.date).toDateString()}
>>>>>>> ce08e49b268629b8e1389990b1ef676331ff0eac
                    <br/>
            {singleEvent.address}
                    <br/>
            {singleEvent.city}, {singleEvent.state} {singleEvent.zipcode}
                    <br/>
<<<<<<< HEAD
            {singleEvent.date_created}
=======
            {new Date(singleEvent.event.date_created).toDateString()}
>>>>>>> ce08e49b268629b8e1389990b1ef676331ff0eac
                    <br/>
            <em>rating: {singleEvent.averageRating}</em></p>
            <br/>
            <div>
            <Afeedback allfeedback={singleEvent.feedback} />
             
            </div>
            </Grid.Column>
            <Grid.Column width={3}>
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
                <Images2 images={singleEvent.images} />
            </Grid.Column>
            {singleEvent.event.user_id === uid ? (
                <DeleteButton 
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