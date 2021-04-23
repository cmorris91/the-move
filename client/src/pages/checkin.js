
//Chelsey
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
        .then(res => console.log(res))
        .then(console.log(checkinState))
        .catch(err => console.log(err));
      };

    function updateImageState (url) {
      setCheckinState({...checkinState, images: url})
    }

        return(
          <div className="check-in-container">
            <h2>
              What do you think of this event?
            </h2>
              <input
              className='form-input'
              onChange={handleInputChange}
              name="comments"
              placeholder='enter comments here'/>
        

              <Rating 
              handleInputChange={handleInputChange}
              name="rating"
              value={checkinState.rating}/>

              <ImageUpload 
              updateImageState={updateImageState}
              />
              
              <button className="button" onClick={handleFormSubmit} type="submit"> Hello</button>
          </div>
        )
    
}

export default Checkin;



