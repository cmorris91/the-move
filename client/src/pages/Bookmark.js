import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

function Bookmark (){
    let i = 0
    const [bookmarkState, setBookmarkState] = useState ({
        user:[],
        events:[],
        currentevent:[],
        allevents:[]
    })
    const user =localStorage.getItem("user")
    const user2 = user.split("/")
    const uid=user2[1]




    useEffect(()=> {
        API.getBookmarksForUser({name:uid})
        .then(res => {
            console.log(res.data[0]);
            setBookmarkState({events:res.data[0].events});
        })
        .catch(err => console.log(err))
        .then(console.log(bookmarkState.events))
       
    }, [])

    const getBookmarks = () => {
        setBookmarkState({})
    }
console.log(bookmarkState.events[0])

    //this component needs to request the bookmark list from line 10
    //addremove bookmark

    return (
        <div>
            {bookmarkState.events.map(event => (
          <ListItem key={event._id}>
              <Link to={"/event/" + event._id}  specific={event} >
                <strong>
                    {event.name}, {event.description}, {event.date}, {event.city}
                </strong>
              </Link>
          </ListItem>

        ))}
        </div>
    )


}

export default Bookmark
