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

    //   const removeBookmark = () => {
    //     setBookmarkState({
    //       type: EventDetail,
    //       _id: bookmarkState.currentPost._id
    //     });
    //   };

    // return (
    //     <h1>hi</h1>
    // )



}

export default Bookmark
