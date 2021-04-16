//GINA
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

class Event extends Component {
  state = {
    eventResults: [{name:"gina"},{name:"ben"}]
  };

 //componentdidMount 
 //api call inside to get all events 
 //this.setState to update whats inside the state 

  //add mapping to event 
  render() {
    return (
      <div>
        <h1 className="text-center">List of Events</h1>
        <List>
        {this.state.eventResults.map(event => (
          <ListItem key={event._id}>
              <Link to={"/event/" + event._id}>
                <strong>
                    {event.name}, {} 
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