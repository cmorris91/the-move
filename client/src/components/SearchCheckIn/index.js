import React, { useState} from "react";
import ResultEvents from "./results";
import API from "../../utils/API"
import "./style.css"

function SearchCheckIn () {
    const [searchEvent, setSearchEvent]= useState ({
        name: "",
        city: "",
        results: []
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearchEvent({...searchEvent, [name]: value})
      
      };
   
    function handleFormSubmit(event) {
        event.preventDefault();
          API.searchCheckinEvent ({
            name: searchEvent.name,
            city: searchEvent.city,
          })
        .then(res => {
          console.log(res)
          setSearchEvent({...searchEvent, results: res.data}) 
          })
        .then(console.log(searchEvent))
        .catch(err => console.log(err));
      };

    return (
        <div className='checkin-container'>
          <div className="checkin-search-title">
          <h1 className="page-title">Which Event would you like to check in to?</h1>
          </div>
            <form className='searchCheckinForm'>
                <div className="inputs">
                <input
                className="form-input" 
                name="name"
                onChange={handleInputChange}
                placeholder="Enter Event Name"
                />
                
                </div>

                <div className="inputs">
                <input 
                className="form-input"
                name="city"
                onChange={handleInputChange}
                placeholder="Enter Event City"/>
                </div>

                <div className="submit-button-container">
                <button className="button" 
                onClick={handleFormSubmit}
                type="submit" >Search <i class="fas fa-search"></i></button>
                </div>
            </form>

            <section className="searchEventsContainer">
            <p style={{fontSize: "30px", color: "white"}}>What's the Move?</p>
            {searchEvent.results.map(event => (
            <ResultEvents
            key= {event._id}
            id= {event._id}
            event_name= {event.name}
            event_host = {event.host_name}
            event_date = {new Date(event.date).toDateString()}
            />
            ))}
            </section> 
        </div>
    )
}

export default SearchCheckIn;