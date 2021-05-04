import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import PlaceSearch from "../components/PlaceSearch";
import { Header, Button} from 'semantic-ui-react';
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
        <div className="homepage">
            

                
                <div className="home-container">
                    <div className="home-feature">
                        <Link to={"/create"} >
                            <button className="button">Create Event</button>
                        </Link>
                   </div>
                   <div className="home-feature">
                        <Link className="checkinLink" to={"/searchCheck-in"} >
                            <button className="button">Check-In to Event</button>
                        </Link>
                    </div>
                    <div className="home-feature">
                        <PlaceSearch />
                    </div>
                </div>
              

            
            
        </div>
    )
    }
}

export default Homepage;
