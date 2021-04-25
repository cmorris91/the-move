import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Container from "../components/Homepage/Container";
import PlaceSearch from "../components/PlaceSearch";
import { Header} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import "./style.css"


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

                <Header>
                
                   <Link floated="left" to={"/create"}>Create an Event</Link>
                   <Link className="checkinLink" to={"/searchCheck-in"}>Check in to an Event</Link>

                </Header>

            </Container>
            <PlaceSearch/>
            
        </div>
    )
    }
}

export default Homepage;
