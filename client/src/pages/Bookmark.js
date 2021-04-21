import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Bookmark (){
    const [bookmarkState, setBookmarkState] = useState ({
        bookmark: []
    })

    useEffect(()=> {
        API.getBookmark()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, [])

    const getBookmarks = () => {
        setBookmarkState({})
    }

    //addremove bookmark

    return (
        <h1>test</h1>
    )


}

export default Bookmark
