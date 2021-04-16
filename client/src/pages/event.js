//GINA
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListItem } from "../components/List";
import API from "../utils/API";

class Event extends Component {
  state = {
    eventResults: []
  };

 

  //add mapping to event 
  render() {
    return (
      <div>
        <h1 className="text-center">List of Events</h1>
        <List>
        {eventResults.map(event => (
          <ListItem key={event._id}>
              <Link to={"/event/" + event._id}>
                <strong>
                    {event.name}
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
