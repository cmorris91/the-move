import React from "react";
import "./style.css";
import PlacesAutoComplete, { geocodeByAddress } from "react-places-autocomplete";


export  default function PlaceSearch() {
    
    const [address, setAddress] = React.useState("");
    

    const handleSelect = async (address) => { 
      
    };

    const handleInput = () => {
        
    };

    function search() {
        const x = document.getElementById("btn");
        document.getElementById("btn").innerHTML="Searching for: " + x.value;
    }


    return (
        <div>
            <PlacesAutoComplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
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

                                console.log(suggestion);

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
        </div>
    );
}