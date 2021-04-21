
//Chelsey
import React, { useState, useEffect}  from "react";
import Rating from "../components/Rating";
import Images from "../components/Images";
import {useParams} from "react-router-dom";
import API from "../utils/API";


function Checkin() {
    const [checkinState, setCheckinState]= useState ({
        comments: [],
        images: "",
        rating: 0,
        // previewSource: "",
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

      // function previewFile (file) {
      //   const reader = new FileReader();
      //   reader.readAsDataURL(file)
      //   reader.onloadend = () => {
      //     setPreviewSource(reader.result)
      //   }
      // }
      
      function handleFormSubmit(event) {
        event.preventDefault();
        console.log(checkinState)
          API.saveCheckin (id, {
            feedback: checkinState.comments,
            // images: checkinState.images,
            rating: checkinState.rating
          })
        .then(res => console.log(res))
        .then(console.log(checkinState))
        .catch(err => console.log(err));
      };

        return(
            <div>
                <input
                onChange={handleInputChange}
                name="comments"/>

                <Rating 
                handleInputChange={handleInputChange}
                name="rating"
                value={checkinState.rating}/>

                <Images 
                handleInputChange={handleInputChange}
                name="images"
                value={checkinState.images}/>
                {/* {previewSource ? (
                  <img src={previewSource} alt="chosen"/>
                ) : (
                  <p> ?</p>
                )} */}
                <button className="button" onClick={handleFormSubmit} type="submit"> Hello</button>
            </div>
        )
    
}

export default Checkin;



