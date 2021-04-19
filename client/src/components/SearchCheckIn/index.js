import React, { useState} from "react";
import ResultEvents from "./results";
import API from "../../utils/API"
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
        .then(res => setSearchEvent({...searchEvent, results: res.data}))
        .catch(err => console.log(err));
      };

    return (
        <div>
            <form>
                <input 
                name="name"
                onChange={handleInputChange}
                placeholder="Enter Event Name"/>

                <input 
                name="city"
                onChange={handleInputChange}
                placeholder="Enter Event City"/>
                <button className="button" 
                onClick={handleFormSubmit}
                type="submit" />
            </form>

            <section className="searchEventsContainer">
            {searchEvent.results.map(event => (
            <ResultEvents
            key= {event._id}
            id= {event._id}
            event_name= {event.name}
            event_host = {event.host_name}
            event_date = {event.date}
            />
            ))}
            </section> 
        </div>
    )
}

export default SearchCheckIn;