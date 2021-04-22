import React from "react";
import "./style.css";
import PlacesAutoComplete from "react-places-autocomplete";


export  default function PlaceSearch(props) {
    
    const [description, setAddress] = React.useState("");
    

    const handleSelect = async (description) => { 
        // this.setState({ })
        
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log("handleFormSubmit", description);
        // this.(this.state.search);
    };
    return (
        <div>
            <PlacesAutoComplete
                value={description}
                onChange={setAddress}
                onSelect={handleSelect}
                handleFormSubmit={handleFormSubmit}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                        <input {...getInputProps({ placeholder: "Search A Location!" })} />
                        

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
            
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleFormSubmit}>Search</button>
        </div>
    );
}