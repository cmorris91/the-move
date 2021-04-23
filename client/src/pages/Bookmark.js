import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

function Bookmark (){
    //the state wukk keep track of events
    const [bookmarkState, setBookmarkState] = useState ({
        events:[]
    })
    //gets data from local storage, then splits them into a array, user2[0]=name user2[1]=User ID
    const user =localStorage.getItem("user")
    const user2 = user.split("/")
    const uid=user2[1]



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
    //will map out all the events inside of your bookmark
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
