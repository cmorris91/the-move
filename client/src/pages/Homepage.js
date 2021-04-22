import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Container from "../components/Homepage/Container";
import Row from "../components/Homepage/Row";
import Col from "../components/Homepage/Col";
import Card from "../components/Homepage/Card";
// import SearchResults from "../components/PlaceSearchResults";
import PlacesAutocomplete from "react-places-autocomplete";
import PlaceSearch from "../components/PlaceSearch";


class Homepage extends Component {
    state = {
        search: "",
        results: [],
        description: []
    };

    componentDidMount() {
        API.getLocationList()
        .then(res => this.setState({description: res.data.message }))
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value});
    };

    handleFormSubmit = event => {
        event.preventDefault ();
        API.getDescriptionOfLocation(this.state.search)
            
    };
    
    
    render () {
    return (
        <div>
            <PlaceSearch/>
        </div>
        )
    }
}

export default Homepage;
