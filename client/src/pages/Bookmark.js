import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Bookmark (){
    const [bookmarkState, setBookmarkState] = useState ({
        bookmark: []
    })

    useEffect(()=> {
        API.getBookmark()
        .then(res => {
            console.log(res.data);
            setBookmarkState({bookmark:res.data});
        })
        .catch(err => console.log(err));
    }, [])

    const getBookmarks = () => {
        setBookmarkState({})
    }


    //this component needs to request the bookmark list from line 10
    //addremove bookmark

    return (
        <div>
            {bookmarkState.bookmark.map(function(value) {
                return (<p>{value.events}</p>)
            })}
        </div>
    )


}

export default Bookmark
