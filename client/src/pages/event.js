//GINA
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import API from "../utils/API";
import { Container, Segment, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import "./style.css"

class Event extends Component {
  constructor(props){
    super(props)
  }
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

   handleRouter = eventid => {
     this.props.history.push(`/event/${eventid}`)
   }


  render() {
    return (
      <div>
        <h1 className="page-title" >What's the Move?</h1>
        <Container>
          <Segment>
        <Table fixed>
          <Table.Header>
          
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Event Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
          </Table.Header>

        <Table.Body>
        {this.state.eventResults.map(event => (
          <Table.Row className="table-row" key={event._id} onClick={() => this.handleRouter(event._id)}>
              
                  <Table.Cell>{new Date(event.date).toDateString()}</Table.Cell> 
                  <Table.Cell>{event.name}</Table.Cell> 
                  <Table.Cell>{event.city}</Table.Cell>
                  <Table.Cell textAlign="left">{event.description}</Table.Cell> 
                
          </Table.Row>
        ))}
        </Table.Body>
        </Table>
        </Segment>
        </Container>
      </div>
    )
  }

}

export default withRouter(Event);
