import React from "react";
import "./style.css";
import PlacesAutoComplete from "react-places-autocomplete";

import Container from "../Homepage/Container";
import Row from "../Homepage/Row";
import Col from "../Homepage/Col"
import API from "../../utils/API";
import {Link} from "react-router-dom";
import { Input, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'


export  default function PlaceSearch(props) {
    
    const [description, setAddress] = React.useState("");
    const [events, setEvents] = React.useState("");

    const handleSelect = async (description) => { 
        // this.setState({ })
        
    };

    function getEvents() {
        API.getEvents()
        .then(res => {
            console.log(res.data)
            setEvents(res.data)})
        .catch(err => console.log(err));
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        getEvents()
        console.log("handleFormSubmit", description);
        // this.(this.state.search);
    };
    return (
        <div>
            <Container>
            <Row>
                <Col size="12">
            
        <div className="home-feature">
            <PlacesAutoComplete
                value={description}
                onChange={setAddress}
                onSelect={handleSelect}
                handleFormSubmit={handleFormSubmit}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <Input  {...getInputProps({ placeholder: "Search A Location!" })} />
                    

                    <div className="autocomplete-dropdown-container">
                        

                        {loading ? <div>...loading</div> : null}
                        {suggestions.map(suggestion => {
                            const style = {
                                backgroundColor: suggestion.active ? "#D5AACD" : "#ECE1EA"

                            };

                            // console.log(suggestion);

                            return (
                                <div {...getSuggestionItemProps(suggestion, { style })}>
                                    {suggestion.description}
                
                            
                            
                                </div>
                                );
                            
                        })}
                    </div>
                </div>
                )}
                
            </PlacesAutoComplete>
            <Button className="button" type="submit" onClick={handleFormSubmit}>Search</Button>
        </div>
        
        </Col>
        </Row>  
        </Container>  
        
        <div>
        <Container>
            <Row>
                <Col size="12">
                    
                    {events ? (
                events.filter(event => description.includes(event.city)).map(item => (
                    <Link to={"/event/" + item._id}  specific={item} >
                        <div className="eventCard">
                        <p>Event Name: {item.name}</p>
                        <p>Event Description: {item.description}</p>
                        <p>Event City: {item.city}</p>
                        <p>Event Date: {new Date(item.date).toDateString()}</p>
                        <hr/>
                        </div>
                    </Link>
                    ))
                    ) : (
                        <h3></h3>
                        )}
                    
            </Col>
        </Row>  
        </Container>  
        </div>
        </div>
    );
}