
//Chelsey
import React, { useState, useEffect}  from "react";
// import Rating from "../components/Rating";
// import Feedback from "../components/Feedback";
// import Images from "../components/Images";
import {useParams} from "react-router-dom";
import API from "../utils/API";


function Checkin() {
    const [checkinState, setCheckinState]= useState ({
        comments: "",
        images: "",
        rating: 0
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
          API.saveCheckin (id, {
            feedback: checkinState.comments,
            images: checkinState.images,
            rating: checkinState.rating
          });
      };

        return(
            <div>
                <Feedback handleInputChange={handleInputChange}/>
                <Rating handleInputChange={handleInputChange}/>
                <Images onChange={handleInputChange}/>
                <button className="button" onClick={handleFormSubmit} type="submit"/>
            </div>
        )
    
}


export default Checkin;

//ANDRES

