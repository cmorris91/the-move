import React from "react";

import PlacesAutoComplete from "react-places-autocomplete";

export  default function PlaceSearch() {
    const [address, setAddress] = React.useState("");

    const handleSelect = async value => { };

    return (
        <div>
            <PlacesAutoComplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input {...getInputProps({ placeholder: "Type address" })} />

                        <div className="autocomplete-dropdown-container">

                            {loading ? <div>...loading</div> : null}
                            {suggestions.map(suggestion => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                };

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