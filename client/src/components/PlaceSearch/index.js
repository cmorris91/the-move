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
                    <input className="form-input" {...getInputProps({ placeholder: "Search A Location!" })} />
                    

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
            <button className="button" type="submit" style={{margin: "0"}} onClick={handleFormSubmit}>Search</button>
        </div>
        
        </Col>
        </Row>  
        </Container>  
        
        <div className="results-box">
            <Row>
                <Col size="12">
                    
                    {events ? (
                events.filter(event => description.includes(event.city)).map(item => (
                    <Link to={"/event/" + item._id}  specific={item} >
                        <div className="eventCard">
                        <p style={{fontSize: "30px", textDecoration: "underline"}}>{item.name}</p>
                        <p>{item.description}</p>
                        <p>Where: {item.city}</p>
                        <p>When: {new Date(item.date).toDateString()}</p>
                        <hr/>
                        </div>
                    </Link>
                    ))
                    ) : (
                        <p style={{fontSize: "30px", color: "white"}}>What's The Move?</p>
                        )}
                    
            </Col>
        </Row>  

        </div>
        </div>
    );
}