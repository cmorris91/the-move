import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, List, ListItem } from "../components/List";
import API from "../utils/API";
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function Bookmark (){
    const history = useHistory
    //the state wukk keep track of events
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
    


    //addremove bookmark, bookmark delete many 
    function handleRemove(id) {
        API.removeBookmark(id, uid)
        .then(() => refresh())
    }

    if (!listBookmark.isBookmarkList) {
        return null
    }

    function handleRouter(eventid) {
        history.push(`/event/${eventid}`)
      }


return (
        <div>
            <h1 className="text-center">Bookmark</h1>
          <Container>
          <List list={listBookmark.list} onRemove={handleRemove}>
            {bookmarkState.events.map(event => (
            <ListItem key={event._id}>
              <Link to={"/event/" + event._id}  specific={event} >
                <p>{event.name}</p> 
                <p>{event.description}</p> 
                <p>{new Date(event.date).toDateString()}</p> 
                <p>{event.city}</p>
                
              </Link>
              <button onClick={() => handleRemove(event._id)}>Delete</button>
            </ListItem>
            ))}
          </List>
        </Container>
        </div>
    )


}

export default Bookmark
