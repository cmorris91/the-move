//GINA
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

class Event extends Component {
  state = {
    search: "",
    eventResults: [{name:"gina"},{name:"ben"}]
  };

   //componentdidMount 
   //api call inside to get all events 
   //this.setState to update whats inside the state 
   //NEED TO ADD EVENT API in API.js 
   componentDidMount(){
     API.getEventList()
       .then(res => this.setState({ events: res.data.message }))
       .catch (err => console.log(err));
   }

   handleInputChange = event => {
     this.setState({ search: event.target.value });
   }

   //NEED TO ADD API in API.js
   handleFormSubmit = event => {
     event.preventDefault();
     API.get
   }


  //add mapping to event 
  //need to add images, rating, and user_id(?) within link
  render() {
    return (
      <div>
        <h1 className="text-center">List of Events</h1>
        <List>
        {this.state.eventResults.map(event => (
          <ListItem key={event._id}>
              <Link to={"/event/" + event._id}>
                <strong>
                    {event.name}, {event.host_name}, {event.category}, {event.description}, {event.date}, {event.address}, {event.city}, {event.state}, {event.zipcode}, {event.date_created}
                </strong>
              </Link>
          </ListItem>
        ))}
        </List>
      </div>
    )
  }

}

export default Event;
