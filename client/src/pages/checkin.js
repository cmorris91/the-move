import React, { useState, useEffect}  from "react";
import Rating from "../components/Rating";
import {useParams} from "react-router-dom";
import API from "../utils/API";
import ImageUpload from "../components/Images";
import "./style.css"


function Checkin() {
    const [checkinState, setCheckinState]= useState ({
        comments: [],
        images: [],
        rating: 0,
        
    })

    const {id} = useParams()
      useEffect(() => {
      API.getEvent(id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, [])

    
    function handleInputChange(event) {
        const { name, value } = event.target;
        setCheckinState({...checkinState, [name]: value})
      };

      function handleFormSubmit(event) {
        event.preventDefault();
        console.log(checkinState)
          API.saveCheckin (id, {
            feedback: checkinState.comments,
            images: checkinState.images,
            rating: checkinState.rating
          })
        .then( res => {
          alert("Thanks for checking in!")
          window.location.replace("/event/" + id)
        })
        .catch(err => console.log(err));
      };

    function updateImageState (url) {
      setCheckinState({...checkinState, images: url})
    }

        return(
          <div className="check-in-container">
            <h2 className="page-title">
              Let people know what you think of the event here!
            </h2>
            <div className="comment-input">
              <input
              className='form-input'
              onChange={handleInputChange}
              name="comments"
              placeholder='enter comments here'/>
            </div>

            <div className="comment-input">
              <Rating
              handleInputChange={handleInputChange}
              name="rating"
              value={checkinState.rating}/>
            </div>

            <div className="comment-input">
              <ImageUpload 
              updateImageState={updateImageState}
              />
            </div>
            <div>
              <button className="button" onClick={handleFormSubmit} type="submit"> Check In!</button>
            </div>
          </div>
        )
    
}

export default Checkin;



