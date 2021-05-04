import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ListItem } from "../components/List";
import API from "../utils/API";
import { Container, Button, List } from 'semantic-ui-react';
import { Table } from 'semantic-ui-react';


import 'semantic-ui-css/semantic.min.css'

function Bookmark (){
    //the state will keep track of events

    const [bookmarkState, setBookmarkState] = useState ({
        events:[]
    });
    const [listBookmark, setListBookmark] = useState ({
        list: [],
        isBookmarkList: true,
    });
    //gets data from local storage, then splits them into a array, user2[0]=name user2[1]=User ID
    const user =localStorage.getItem("user")
    const user2 = user.split("/")
    const uid=user2[1]

    function refresh(){
        window.location.reload()
    }

//on load it will find the bookmark for you, then set the events into a array state
    useEffect(()=> {
        API.getBookmarksForUser({name:uid})
        .then(res => {
        console.log(res.data[0]);
        setBookmarkState({events:res.data[0].events});
        })
        .catch(err => console.log(err))
        .then(console.log(bookmarkState.events))
    }, [])
    


    //addremove bookmark
    function handleRemove(id) {
        API.removeBookmark(id, uid)
        .then(() => refresh())
    }

    if (!listBookmark.isBookmarkList) {
        return null
    }

return (
        <div>
            <h1 className=" page-title text-center">Saved Events</h1>
            <br/>
          <Container className="bookmark-box" style={{width: "55%"}}>
          <List divided verticalAlign="middle" className="bookmark-list">

          <List.Content centered list={listBookmark.list} onRemove={handleRemove}>
              
            {bookmarkState.events.map(event => (
            <ListItem className="listItem" key={event._id}>

                
                <Link to={"/event/" + event._id}  specific={event} >
                <p>{new Date(event.date).toDateString()}, {event.city}</p> 
                <p>{event.name}</p>
                
              </Link>
              <button className="button" floated="right" onClick={() => handleRemove(event._id)}>Delete</button>
              
            </ListItem>
            ))}

          </List.Content>
        </List>
        </Container>
        </div>
    )

}

export default Bookmark
