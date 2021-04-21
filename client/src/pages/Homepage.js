import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Container from "../components/Homepage/Container";
import Row from "../components/Homepage/Row";
import Col from "../components/Homepage/Col";
import Card from "../components/Homepage/Card";
import SearchResults from "../components/PlaceSearchResults";
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
        <Container>
            <Row>
                <Col size="md-8">
                    <Card heading="Results">
                        <SearchResults results={this.state.results} />
                    </Card>
                </Col>
        
            <Col size="md-4">
                <Card heading="Search">
                    <PlaceSearch
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                </Card>
            </Col>
        </Row>  
        </Container>  
        </div>
        )
    }
}

export default Homepage;
