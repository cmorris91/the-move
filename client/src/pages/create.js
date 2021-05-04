
import React, {useState} from "react";
import API from "../utils/API"
import "./style.css"

function Create () {
    const [eventState, setEventState] = useState({
        name:"",
        host_name: "",
        category: "",
        description: "",
        date: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        user: 0
    }); 
    
    const user =localStorage.getItem("user")
    const user2 = user.split("/")
    const uid=user2[1];
    
    function handleInputChange(event) {
        const { name, value } = event.target;
        setEventState({...eventState, [name]: value})
      };

    function handleFormSubmit(event) {
        event.preventDefault();
          API.saveEvent({
            name: eventState.name,
            host_name: eventState.host_name,
            category: eventState.category,
            description: eventState.description,
            date: eventState.date,
            address: eventState.address,
            city: eventState.city,
            state: eventState.state,
            zipcode: eventState.zipcode,
            user_id: uid
          })
            .then(res => {
                alert("Your Event Has Been Created")
                window.location.replace("/event")
                console.log(res)})
            .catch(err => console.log(err));
        
      };
    return (
    <div className="create">
        <div>
        <h1 className="page-title" id="event-title">Create Your Event</h1>
            <p style={{textAlign: "center", color: "white"}}>*Please fill out all fields</p>
        </div>
        <section className="event-form">
            <form className="row g-3" id='create-form'>
                <div className="col-md-12  inputs" id='eventDate'>
                    <label for="eventDate" style={{marginRight: "10px", padding: "10px", color: "rgb(146 143 143)", fontSize: "22px"}}>Event Date</label>
                    <input type="date" 
                    id="eventDate" 
                    name="date" 
                    className="drop-down" 
                    onChange={handleInputChange}/>
                </div>
                <div className="col-md-10 inputs">
                    <input type="text" 
                    className="form-input" 
                    id="inputEventName" 
                    placeholder="Event Name" 
                    name="name" 
                    onChange={handleInputChange}/>
                </div>
                <div className= "col-md-10 inputs">
                    <input type="text" 
                    className="form-input" 
                    id="inputHostName" 
                    placeholder="Host Name" 
                    name="host_name" 
                    onChange={handleInputChange}/>
                </div>
                <div className= "col-md-10 inputs">
                    <select id="inputEventType" 
                    className="form-select drop-down" 
                    style={{width: "100%"}} 
                    name="category" 
                    onChange={handleInputChange}>
                        <option>Type of Event</option>
                        <option value="sports">Sports</option>
                        <option value="Arts&Crafts">Arts &amp; Cratfs</option>
                        <option value="Music">Music</option>
                        <option value="Dinig">Dining</option>
                        <option value="Recreaction">Recreation</option>
                        <option value="Social">Social</option>
                        <option value="Business">Business</option>
                    </select>
                </div>
                <div className="form-floating col-md-10 inputs">
                    <textarea className="form-input" 
                    placeholder="Tell Us About Your Event!" 
                    id="eventDescription" 
                    style={{height: "100px"}} 
                    name="description" 
                    onChange={handleInputChange}></textarea>
                </div>
                <div className= "col-md-10 inputs">
                    <input type="text" 
                    className="form-input" 
                    id="inputStreetAddress" 
                    placeholder="Enter Street Address" 
                    name="address" 
                    onChange={handleInputChange}/>
                </div>
                <div className= "col-md-10 inputs">
                    <input type="text" 
                    className="form-input" id="inputCity" 
                    placeholder="City" name="city" 
                    onChange={handleInputChange}/>
                </div>
                <div className= "col-md-10 inputs">
                    <select id="inputState" 
                    className="form-select drop-down" 
                    placeholder="State" 
                    style={{width: "100%"}} 
                    name="state" 
                    onChange={handleInputChange}>
                        <option>State</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinios</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Lousiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="NewHampshire">New Hampshire</option>
                        <option value="NewJersey">New Jersey</option>
                        <option value="NewMexico">New Mexico</option>
                        <option value="NewYork">New York</option>
                        <option value="NorthCarolina">North Carolina</option>
                        <option value="NorthDakota">North Dakota</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="RhodeIsland">Rhode Island</option>
                        <option value="SouthCarolina">South Carolina</option>
                        <option value="SouthDakota">South Dakota</option>
                        <option value="Tennesee">Tennesee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="WestVirginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                    </select>
                </div>
                <div className="col-md-10 inputs">
                    <input type="text" 
                    className="form-input" 
                    id="inputZip" 
                    placeholder="Zip Code" 
                    name="zipcode" 
                    onChange={handleInputChange}/>
                </div>
               
                <div class="col-10" id='create-submit-btn'>
                    <button type="submit" 
                    class="button btn-primary" 
                    onClick={handleFormSubmit}>Submit</button>
                </div>
            </form>
        </section>
    </div>
    )
}

export default Create;


