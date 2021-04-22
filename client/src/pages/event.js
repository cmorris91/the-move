//GINA
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import API from "../utils/API";


class Event extends Component {
  state = {
    search: "",
    eventResults: [],
    bookmark: []
  };

   componentDidMount(){
     API.getEvents()
       .then(res => {
         console.log(res)
        this.setState({ eventResults: res.data })})
       .catch (err => console.log(err));
   }

   handleInputChange = event => {
     this.setState({ search: event.target.value });
   }

  //  handleBtnClick = event => {
  //    event.preventDefault();
  //    API.saveEvent(this.state.bookmark)
  //    .then(res => {
  //     console.log(res)
  //    this.setState({ bookmark: res.data })})
  //    this.context.router.push({
  //     pathname: '/event/:id',
  //     state: {event: this.state.eventResults}  
  //   })
  //   .catch (err => console.log(err));
  //  }


   //check-in button need to reroute to /check-in page
   //refer to checkin.js and searchcheckin(results.js)
  render() {
    return (
      <div>
        <h1 className="text-center">List of Events</h1>
        <List>
        {this.state.eventResults.map(event => (
          <ListItem key={event._id}>
              <Link to={"/event/" + event._id}  specific={event} >
                <strong>
                    {event.name}, {event.description}, {event.date}, {event.city}
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
